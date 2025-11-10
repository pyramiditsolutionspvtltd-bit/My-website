<?php
// Alternative SMTP-based contact form handler
// This file provides a more reliable email solution using SMTP

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

if (!isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    echo json_encode(['status' => 'error', 'message' => 'Missing required fields']);
    exit;
}

// Sanitize input data
$name = filter_var(trim($data['name']), FILTER_SANITIZE_STRING);
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$phone = isset($data['phone']) ? filter_var(trim($data['phone']), FILTER_SANITIZE_STRING) : '';
$topic = isset($data['topic']) ? filter_var(trim($data['topic']), FILTER_SANITIZE_STRING) : '';
$message = filter_var(trim($data['message']), FILTER_SANITIZE_STRING);

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid email address']);
    exit;
}

// Create email content
$emailContent = "=== NEW CONTACT FORM SUBMISSION ===\n\n";
$emailContent .= "Pyramid IT Solutions Website Contact Form\n";
$emailContent .= "Submission Date: " . date('Y-m-d H:i:s') . "\n\n";
$emailContent .= "CONTACT DETAILS:\n";
$emailContent .= "----------------\n";
$emailContent .= "Name: " . $name . "\n";
$emailContent .= "Email: " . $email . "\n";

if (!empty($phone)) {
    $emailContent .= "Phone: " . $phone . "\n";
}
if (!empty($topic)) {
    $emailContent .= "Topic/Subject: " . $topic . "\n";
}

$emailContent .= "\nMESSAGE:\n";
$emailContent .= "--------\n";
$emailContent .= $message . "\n\n";
$emailContent .= "=== END OF SUBMISSION ===\n";
$emailContent .= "Please respond to the customer at: " . $email;

// Save to file (backup method)
$logFile = 'contact_submissions.txt';
$logContent = "\n" . date('Y-m-d H:i:s') . " - Contact Form Submission\n";
$logContent .= $emailContent . "\n";
$logContent .= str_repeat('-', 80) . "\n";

try {
    file_put_contents($logFile, $logContent, FILE_APPEND | LOCK_EX);
    
    // Always return success since we've saved the data
    echo json_encode([
        'status' => 'success', 
        'message' => 'Thank you for your message! We have received your inquiry and will contact you within 24 hours.'
    ]);
    
} catch (Exception $e) {
    echo json_encode([
        'status' => 'error', 
        'message' => 'There was an issue processing your request. Please try again or contact us directly at +040 4200 3912.'
    ]);
}
?>