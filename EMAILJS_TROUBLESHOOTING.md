# EmailJS Troubleshooting Guide

## Current Configuration Status ✅
- Service ID: `service_0wxgwe6` ✅
- Template ID: `template_mk2sdif` ✅  
- Public Key: `pYRRhbVw0wgCpZBf2` ✅

## Common Issues & Solutions

### 1. Template Variable Mismatch
**Problem:** Template variables in EmailJS dashboard don't match the code.

**Solution:** Ensure your EmailJS template contains these exact variables:
```
{{from_name}}
{{from_email}}
{{phone}}
{{topic}}
{{message}}
{{to_email}}
{{submission_date}}
{{company_name}}
```

### 2. Service Not Connected
**Problem:** Gmail service not properly connected.

**Solution:** 
1. Go to EmailJS dashboard > Email Services
2. Check if `service_0wxgwe6` shows as "Connected"
3. If not, reconnect your Gmail account

### 3. Template Not Published
**Problem:** Template exists but isn't active.

**Solution:**
1. Go to EmailJS dashboard > Email Templates
2. Find `template_mk2sdif`
3. Ensure it's marked as "Active" or "Published"

### 4. CORS Issues
**Problem:** Browser blocking cross-origin requests.

**Solution:** EmailJS should handle this automatically, but check if you have any ad blockers or security extensions.

### 5. Account Limits
**Problem:** Free tier limits exceeded.

**Solution:** 
- Check EmailJS dashboard for usage
- Free tier allows 200 emails/month

## Testing Steps

### Step 1: Check EmailJS Dashboard
1. Login to [EmailJS.com](https://emailjs.com)
2. Verify service is connected
3. Verify template is active
4. Check usage limits

### Step 2: Browser Console Test
1. Open browser developer tools (F12)
2. Go to Console tab
3. Fill out the contact form
4. Submit and check console for errors

### Step 3: Manual Test
Try this in browser console:
```javascript
// Test EmailJS directly
emailjs.send('service_0wxgwe6', 'template_mk2sdif', {
    from_name: 'Test',
    from_email: 'test@test.com',
    phone: '123456789',
    topic: 'Test',
    message: 'Test message',
    to_email: 'pyramiditsolutionspvtltd@gmail.com',
    submission_date: new Date().toLocaleString(),
    company_name: 'Pyramid IT Solutions'
}, 'pYRRhbVw0wgCpZBf2').then(console.log).catch(console.error);
```

## Most Likely Issues

Based on the error message, check these in order:

1. **Template Variables:** Most common issue
2. **Service Connection:** Gmail account disconnected
3. **Template Status:** Not active/published
4. **Network Issues:** Firewall/ad blocker

## Quick Fix Checklist

- [ ] EmailJS service shows "Connected" status
- [ ] Template shows "Active" status  
- [ ] Template contains all required variables
- [ ] No browser console errors
- [ ] Account usage under limits
- [ ] No ad blockers interfering

## Need Help?
If issues persist, share:
1. Browser console error messages
2. Screenshot of EmailJS dashboard status
3. Template content from EmailJS dashboard