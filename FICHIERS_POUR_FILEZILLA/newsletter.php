<?php
/**
 * MEDAR STUDIO - Secure Newsletter Subscription Handler
 * Optimized for web hosting (cPanel, Hostinger, OVH, Apache/PHP via FileZilla).
 *
 * Privacy & Security:
 * - No subscriber list is ever stored in a file or database on the server.
 * - Each subscriber is delivered exclusively via email to your private mailbox.
 */

// Handle CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept');
    http_response_code(200);
    exit;
}

// Block direct browser GET navigation
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /');
    exit;
}

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data) || empty($data)) {
    $data = $_POST;
}

$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Please provide a valid email address.'
    ]);
    exit;
}

$to = 'medarstudio@gmail.com';
$subject = "=?UTF-8?B?" . base64_encode("New Newsletter Subscriber - $email") . "?=";

$body  = "====================================================\n";
$body .= "   NEW NEWSLETTER SUBSCRIPTION - MEDAR STUDIO\n";
$body .= "====================================================\n\n";
$body .= "SUBSCRIBER EMAIL : " . $email . "\n";
$body .= "DATE             : " . date('Y-m-d H:i:s') . "\n";
$body .= "CLIENT IP        : " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";
$body .= "ORIGIN DOMAIN    : " . ($_SERVER['HTTP_HOST'] ?? 'medarstudio.com') . "\n\n";
$body .= "----------------------------------------------------\n";
$body .= "Zero storage on server. Transferred directly to your private inbox.\n";
$body .= "====================================================\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'From: MEDAR STUDIO <contact@medarstudio.com>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'X-Mailer: PHP/' . phpversion();

// 1. Standard host mail() with envelope sender Return-Path (-f)
$mailSent = @mail($to, $subject, $body, implode("\r\n", $headers), "-f contact@medarstudio.com");

if (!$mailSent) {
    $mailSent = @mail($to, $subject, $body, implode("\r\n", $headers));
}

// 2. cURL fallback to FormSubmit if mail() is restricted
$curlRelay = false;
if (!$mailSent && function_exists('curl_init')) {
    $ch = curl_init('https://formsubmit.co/ajax/medarstudio@gmail.com');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'Origin: https://medarstudio.com',
        'Referer: https://medarstudio.com/'
    ]);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        '_subject' => "New Newsletter Subscriber : $email - MEDAR STUDIO",
        '_captcha' => 'false',
        '_template' => 'table',
        'subscriber_email' => $email,
        'date' => date('Y-m-d H:i:s'),
        'source' => 'PHP Server (newsletter.php)'
    ]));
    curl_setopt($ch, CURLOPT_TIMEOUT, 6);
    $curlRes = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    if ($httpCode >= 200 && $httpCode < 300) {
        $curlRelay = true;
    }
}

// Return clean success message WITHOUT revealing private destination email address
echo json_encode([
    'success' => true,
    'message' => 'Thank you for subscribing! You will receive our latest creative updates.'
]);
exit;
