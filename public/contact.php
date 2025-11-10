<?php
    // Enable error reporting for debugging
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    
    // Set content type for JSON response
    header('Content-Type: application/json');
    
    $postData = file_get_contents('php://input');
    $data = json_decode($postData, true);

    if (isset($data['name']) && isset($data['email']) && isset($data['message'])) {
        $email = $data['email'];

        // Format email content professionally
        $emailContent = "=== NEW CONTACT FORM SUBMISSION ===\n\n";
        $emailContent .= "Pyramid IT Solutions Website Contact Form\n";
        $emailContent .= "Submission Date: " . date('Y-m-d H:i:s') . "\n\n";
        
        $emailContent .= "CONTACT DETAILS:\n";
        $emailContent .= "----------------\n";
        $emailContent .= "Name: " . $data['name'] . "\n";
        $emailContent .= "Email: " . $email . "\n";
        
        if (!empty($data['phone'])) {
            $emailContent .= "Phone: " . $data['phone'] . "\n";
        }
        if (!empty($data['topic'])) {
            $emailContent .= "Topic/Subject: " . $data['topic'] . "\n";
        }
        
        $emailContent .= "\nMESSAGE:\n";
        $emailContent .= "--------\n";
        $emailContent .= $data['message'] . "\n\n";
        
        $emailContent .= "=== END OF SUBMISSION ===\n";
        $emailContent .= "Please respond to the customer at: " . $email;
        
        // Receiver Email - Company Email
        $to = 'info@pyramidsolutions.co.in';
        
        // Optional: Add multiple recipients
        // $to = 'info@pyramidsolutions.co.in, admin@pyramidsolutions.co.in';

        $subject = 'New Contact Form Submission - Pyramid IT Solutions';
        
        // Enhanced email headers
        $headers = "From: $email" . "\r\n";
        $headers .= "Reply-To: $email" . "\r\n";
        $headers .= "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";
        $headers .= "X-Priority: 1" . "\r\n";
        
        // Try to send email to company
        try {
            $emailSent = @mail($to, $subject, $emailContent, $headers);
            
            if ($emailSent) {
                // Send auto-reply to customer
                $autoReplySubject = "Thank you for contacting Pyramid IT Solutions";
                $autoReplyMessage = "Dear " . $data['name'] . ",\n\n";
                $autoReplyMessage .= "Thank you for reaching out to Pyramid IT Solutions. We have received your message and will get back to you within 24 hours.\n\n";
                $autoReplyMessage .= "Your Message Details:\n";
                $autoReplyMessage .= "-------------------\n";
                if (!empty($data['topic'])) {
                    $autoReplyMessage .= "Topic: " . $data['topic'] . "\n";
                }
                $autoReplyMessage .= "Message: " . $data['message'] . "\n\n";
                $autoReplyMessage .= "If you have any urgent inquiries, please call us at +040 4200 3912.\n\n";
                $autoReplyMessage .= "Best regards,\n";
                $autoReplyMessage .= "Pyramid IT Solutions Team\n";
                $autoReplyMessage .= "Email: info@pyramidsolutions.co.in\n";
                $autoReplyMessage .= "Phone: +040 4200 3912\n";
                $autoReplyMessage .= "Address: H.No.7-1-213/B, Near SR Nagar Police Station, Ameerpet, Hyderabad, Telangana 500016";
                
                $autoReplyHeaders = "From: info@pyramidsolutions.co.in" . "\r\n";
                $autoReplyHeaders .= "Reply-To: info@pyramidsolutions.co.in" . "\r\n";
                $autoReplyHeaders .= "MIME-Version: 1.0" . "\r\n";
                $autoReplyHeaders .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";
                
                @mail($email, $autoReplySubject, $autoReplyMessage, $autoReplyHeaders);
                
                echo json_encode([
                    'status' => 'success', 
                    'message' => 'Thank you! Your message has been sent successfully. You will receive a confirmation email shortly.'
                ]);
            } else {
                // If mail fails, save to file as backup and still show success to user
                $logFile = 'contact_submissions.txt';
                $logContent = "\n" . date('Y-m-d H:i:s') . " - Contact Form Submission\n";
                $logContent .= $emailContent . "\n";
                $logContent .= str_repeat('-', 50) . "\n";
                
                file_put_contents($logFile, $logContent, FILE_APPEND | LOCK_EX);
                
                echo json_encode([
                    'status' => 'success', 
                    'message' => 'Thank you for your message! We have received your inquiry and will contact you soon.'
                ]);
            }
        } catch (Exception $e) {
            // Log the error and save form data
            $logFile = 'contact_submissions.txt';
            $logContent = "\n" . date('Y-m-d H:i:s') . " - Contact Form Submission (Email Failed)\n";
            $logContent .= $emailContent . "\n";
            $logContent .= "Error: " . $e->getMessage() . "\n";
            $logContent .= str_repeat('-', 50) . "\n";
            
            @file_put_contents($logFile, $logContent, FILE_APPEND | LOCK_EX);
            
            echo json_encode([
                'status' => 'success', 
                'message' => 'Thank you for your message! We have received your inquiry and will contact you soon.'
            ]);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid form data.']);
    }
?>
