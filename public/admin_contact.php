<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Submissions - Pyramid IT Solutions</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            color: #333;
            border-bottom: 2px solid #007bff;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .submission {
            background: #f8f9fa;
            padding: 15px;
            margin: 10px 0;
            border-left: 4px solid #007bff;
            border-radius: 4px;
        }
        .no-submissions {
            text-align: center;
            color: #666;
            font-style: italic;
            padding: 40px;
        }
        .refresh-btn {
            background: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-bottom: 20px;
        }
        .refresh-btn:hover {
            background: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Contact Form Submissions</h1>
            <p>Pyramid IT Solutions Admin Panel</p>
        </div>
        
        <button class="refresh-btn" onclick="location.reload()">Refresh</button>
        
        <div id="submissions">
            <?php
            $logFile = 'contact_submissions.txt';
            
            if (file_exists($logFile)) {
                $content = file_get_contents($logFile);
                if (!empty($content)) {
                    echo '<pre style="white-space: pre-wrap; word-wrap: break-word;">' . htmlspecialchars($content) . '</pre>';
                } else {
                    echo '<div class="no-submissions">No submissions found yet.</div>';
                }
            } else {
                echo '<div class="no-submissions">No submissions file found. The file will be created when the first submission is received.</div>';
            }
            ?>
        </div>
    </div>
</body>
</html>