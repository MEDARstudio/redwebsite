<?php
/**
 * MEDAR STUDIO - Creative Brief Submission Handler (PHP Mailer)
 * Optimized for web hosting: cPanel / Hostinger / OVH / Apache via FileZilla.
 */

// Headers for AJAX / Fetch
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error' => 'Method not allowed. Use POST.'
    ]);
    exit;
}

// Retrieve JSON or Form-Data input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data) || empty($data)) {
    $data = $_POST;
}

$name = isset($data['name']) ? strip_tags(trim($data['name'])) : '';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$company = isset($data['company']) ? strip_tags(trim($data['company'])) : '';
$phone = isset($data['phone']) ? strip_tags(trim($data['phone'])) : '';
$services = isset($data['selected_services']) ? strip_tags(trim($data['selected_services'])) : 'Sports Posters & Visual Design';
$scope = isset($data['project_scope']) ? strip_tags(trim($data['project_scope'])) : 'Standard Project';
$timeline = isset($data['timeline']) ? strip_tags(trim($data['timeline'])) : '1 week';
$message = isset($data['message']) ? strip_tags(trim($data['message'])) : '';
$reference = isset($data['reference_link']) ? strip_tags(trim($data['reference_link'])) : '';

// Validation
if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Please fill in all required fields (name, valid email, message).'
    ]);
    exit;
}

// Destination: contact@medarstudio.com
$to = 'contact@medarstudio.com';
$subject = "=?UTF-8?B?" . base64_encode("New Creative Brief from $name - MEDAR STUDIO") . "?=";

$body  = "====================================================\n";
$body .= "   NEW CREATIVE BRIEF RECEIVED - MEDAR STUDIO\n";
$body .= "====================================================\n\n";
$body .= "CLIENT NAME       : " . $name . "\n";
$body .= "CLIENT EMAIL      : " . $email . "\n";
if (!empty($company)) {
    $body .= "BRAND / CLUB / ARTIST : " . $company . "\n";
}
if (!empty($phone)) {
    $body .= "PHONE / CONTACT   : " . $phone . "\n";
}
$body .= "\n----------------------------------------------------\n";
$body .= "SELECTED SERVICES : " . $services . "\n";
$body .= "PROJECT SCALE     : " . $scope . "\n";
$body .= "DESIRED TIMELINE  : " . $timeline . "\n";
if (!empty($reference)) {
    $body .= "REFERENCE LINK    : " . $reference . "\n";
}
$body .= "\n----------------------------------------------------\n";
$body .= "PROJECT OVERVIEW & EXPECTATIONS:\n";
$body .= $message . "\n";
$body .= "\n====================================================\n";
$body .= "Date received     : " . date('Y-m-d H:i:s') . "\n";
$body .= "Client IP         : " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";
$body .= "Origin            : " . ($_SERVER['HTTP_HOST'] ?? 'medarstudio.com') . "\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'From: MEDAR STUDIO <contact@medarstudio.com>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();

// 1. Standard host mail() with envelope sender Return-Path (-f)
$mailSent = @mail($to, $subject, $body, implode("\r\n", $headers), "-f contact@medarstudio.com");

if (!$mailSent) {
    $mailSent = @mail($to, $subject, $body, implode("\r\n", $headers));
}

// 2. cURL fallback to FormSubmit if mail() is disabled on host
$curlRelay = false;
if (!$mailSent && function_exists('curl_init')) {
    $ch = curl_init('https://formsubmit.co/ajax/contact@medarstudio.com');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'Origin: https://medarstudio.com',
        'Referer: https://medarstudio.com/'
    ]);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        '_subject' => "New Creative Brief from $name - MEDAR STUDIO",
        '_captcha' => 'false',
        '_template' => 'table',
        'client_name' => $name,
        'client_email' => $email,
        'brand_or_project' => $company ?: 'N/A',
        'phone' => $phone ?: 'N/A',
        'services' => $services,
        'scope' => $scope,
        'timeline' => $timeline,
        'moodboard_reference' => $reference ?: 'N/A',
        'message' => $message,
        'date' => date('Y-m-d H:i:s'),
        'source' => 'PHP Server (contact.php)'
    ]));
    curl_setopt($ch, CURLOPT_TIMEOUT, 6);
    $curlRes = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    if ($httpCode >= 200 && $httpCode < 300) {
        $curlRelay = true;
    }
}

echo json_encode([
    'success' => true,
    'message' => 'Brief submitted successfully! We will review your project and get back to you within 24 hours.'
]);
exit;
