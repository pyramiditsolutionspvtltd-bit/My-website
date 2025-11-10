# EmailJS Setup Guide for Pyramid IT Solutions

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended)
4. Connect your `pyramiditsolutionspvtltd@gmail.com` account
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```html
Subject: New Contact Form Submission - {{company_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Topic: {{topic}}
Date: {{submission_date}}

Message:
{{message}}

---
Please respond to: {{from_email}}
```

4. Save the template and note the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to **Account** > **General**
2. Copy your **Public Key** (e.g., `user_abcdef123`)

## Step 5: Update Configuration
1. Open `src/config/emailjs.config.js`
2. Replace the placeholder values:

```javascript
export const emailJSConfig = {
    serviceId: 'your_service_id_here',     // From Step 2
    templateId: 'your_template_id_here',   // From Step 3
    publicKey: 'your_public_key_here',     // From Step 4
    // ... rest of config
};
```

## Step 6: Test the Contact Form
1. Fill out your website's contact form
2. Check `pyramiditsolutionspvtltd@gmail.com` for the email
3. Verify all form fields appear correctly

## Troubleshooting

### If emails aren't being sent:
1. Check browser console for errors
2. Verify all IDs are correct in config file
3. Ensure Gmail service is properly connected
4. Check EmailJS dashboard logs

### Template Variables:
Make sure these variables match in your EmailJS template:
- `{{from_name}}`
- `{{from_email}}`
- `{{phone}}`
- `{{topic}}`
- `{{message}}`
- `{{company_name}}`
- `{{submission_date}}`

### Free Tier Limits:
- 200 emails per month
- Basic templates only
- Community support

For higher volumes, consider upgrading to EmailJS paid plans.

## Security Notes:
- Public key is safe to use in frontend code
- Service and Template IDs are also safe to expose
- Never expose your Private Key in frontend code

## Benefits of EmailJS:
✅ No server-side email configuration needed
✅ Works from localhost and any hosting
✅ Reliable email delivery
✅ Easy to set up and maintain
✅ Free tier available