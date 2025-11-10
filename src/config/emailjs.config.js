// EmailJS Configuration for Pyramid IT Solutions
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Sign up for a free account
// 3. Create a service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Replace the values below with your actual EmailJS credentials

export const emailJSConfig = {
    // Your EmailJS service ID (from EmailJS dashboard)
    serviceId: 'service_0wxgwe6',
    
    // Your EmailJS template ID (from EmailJS dashboard)  
    templateId: 'template_mk2sdif',
    
    // Your EmailJS public key (from EmailJS dashboard)
    publicKey: 'pYRRhbVw0wgCpZBf2',
    
    // Email template parameters mapping
    templateParams: {
        // These should match your EmailJS template variables
        from_name: '{{from_name}}',
        from_email: '{{from_email}}',
        phone: '{{phone}}',
        topic: '{{topic}}',
        message: '{{message}}',
        to_email: '{{to_email}}',
        submission_date: '{{submission_date}}'
    }
};

// Initialize EmailJS with your public key
export const initEmailJS = (emailjs) => {
    emailjs.init(emailJSConfig.publicKey);
};