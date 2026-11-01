<?php
/**
 * MEDAR STUDIO - Email Diagnostic & Verification Tool
 * You can access this script directly from your browser on your web server:
 * 👉 https://your-domain.com/test-mail.php
 */
header('Content-Type: text/html; charset=UTF-8');

$message = '';
$statusClass = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $target = $_POST['target'] ?? 'newsletter';
    
    if ($target === 'newsletter') {
        $to = 'medarstudio@gmail.com';
        $subject = "Newsletter Test Notification - MEDAR STUDIO";
        $body = "This is a diagnostic test email sent from test-mail.php to verify alerts sent to your private inbox.\nDate: " . date('Y-m-d H:i:s');
    } else {
        $to = 'contact@medarstudio.com';
        $subject = "Creative Brief Test Notification - MEDAR STUDIO";
        $body = "This is a diagnostic test email sent from test-mail.php to verify briefs sent to contact@medarstudio.com.\nDate: " . date('Y-m-d H:i:s');
    }

    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'From: MEDAR STUDIO <contact@medarstudio.com>',
        'Reply-To: contact@medarstudio.com',
        'X-Mailer: PHP/' . phpversion()
    ];

    $sent = @mail($to, $subject, $body, implode("\r\n", $headers), "-f contact@medarstudio.com");
    if (!$sent) {
        $sent = @mail($to, $subject, $body, implode("\r\n", $headers));
    }

    if ($sent) {
        $message = "✅ Test email sent successfully to <strong>$to</strong>!<br>Please check your inbox and <em>Spam / Junk</em> folder.";
        $statusClass = 'success';
    } else {
        $message = "⚠️ The server's PHP mail() function returned an error. Your hosting provider may restrict unauthenticated mail.";
        $statusClass = 'error';
    }
}

$mailEnabled = function_exists('mail');
$curlEnabled = function_exists('curl_init');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Diagnostic — MEDAR STUDIO</title>
    <style>
        body { background: #000; color: #fff; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 2rem; max-width: 650px; margin: 0 auto; line-height: 1.6; }
        .card { background: #0d0d10; border: 1px solid #222; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; }
        h1 { color: #E91F29; margin-top: 0; font-size: 1.6rem; }
        .badge { display: inline-block; padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.85rem; font-weight: bold; }
        .badge-ok { background: #053b1b; color: #4ade80; border: 1px solid #16a34a; }
        .badge-no { background: #450a0a; color: #f87171; border: 1px solid #dc2626; }
        .btn { background: #E91F29; color: #fff; border: none; padding: 0.75rem 1.25rem; font-size: 0.95rem; font-weight: bold; border-radius: 6px; cursor: pointer; text-decoration: none; display: inline-block; margin-right: 0.5rem; }
        .btn:hover { background: #b9151d; }
        .btn-secondary { background: #222; border: 1px solid #444; }
        .btn-secondary:hover { background: #333; }
        .alert { padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; font-size: 0.95rem; }
        .alert.success { background: rgba(34, 197, 94, 0.15); border: 1px solid #22c55e; color: #86efac; }
        .alert.error { background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; color: #fca5a5; }
        ul { padding-left: 1.2rem; }
        li { margin-bottom: 0.5rem; }
    </style>
</head>
<body>
    <h1>MEDAR STUDIO — Server Email Diagnostic</h1>
    
    <?php if (!empty($message)): ?>
        <div class="alert <?= $statusClass ?>"><?= $message ?></div>
    <?php endif; ?>

    <div class="card">
        <h3>1. Web Host Capabilities:</h3>
        <ul>
            <li>PHP <code>mail()</code> function: <?= $mailEnabled ? '<span class="badge badge-ok">Enabled</span>' : '<span class="badge badge-no">Disabled by host</span>' ?></li>
            <li><code>cURL</code> Extension: <?= $curlEnabled ? '<span class="badge badge-ok">Available</span>' : '<span class="badge badge-no">Unavailable</span>' ?></li>
            <li>PHP Version: <strong><?= phpversion() ?></strong></li>
            <li>Server Software: <strong><?= htmlspecialchars($_SERVER['SERVER_SOFTWARE'] ?? 'Unknown') ?></strong></li>
        </ul>
    </div>

    <div class="card">
        <h3>2. Test Sending:</h3>
        <p>Trigger an instant test email to verify delivery:</p>
        
        <form method="POST" style="margin-bottom: 1rem;">
            <input type="hidden" name="target" value="newsletter">
            <button type="submit" class="btn">Test Newsletter Alert</button>
        </form>

        <form method="POST">
            <input type="hidden" name="target" value="contact">
            <button type="submit" class="btn btn-secondary">Test Creative Brief Alert</button>
        </form>
    </div>

    <div class="card">
        <h3>3. Troubleshooting:</h3>
        <ol>
            <li><strong>Spam / Junk folder:</strong> When receiving initial emails from a new server, email providers may place them in Spam. Mark them as "Not spam".</li>
            <li><strong>FormSubmit Activation:</strong> If using FormSubmit relay, check your inbox for <code>[FormSubmit] Action Required: Activate Form</code> and click the activation button once.</li>
        </ol>
    </div>
</body>
</html>
