// EmailJS Test Script
// Open browser console and run this to test EmailJS configuration

import emailjs from '@emailjs/browser';

const testEmailJS = async () => {
    try {
        // Initialize EmailJS
        emailjs.init('pYRRhbVw0wgCpZBf2');
        
        const testParams = {
            from_name: 'Test User',
            from_email: 'test@example.com',
            phone: '+1234567890',
            topic: 'Test Message',
            message: 'This is a test message from EmailJS configuration test.',
            to_email: 'pyramiditsolutionspvtltd@gmail.com',
            submission_date: new Date().toLocaleString(),
            company_name: 'Pyramid IT Solutions'
        };
        
        console.log('Testing EmailJS with params:', testParams);
        
        const result = await emailjs.send(
            'service_0wxgwe6',
            'template_mk2sdif',
            testParams,
            'pYRRhbVw0wgCpZBf2'
        );
        
        console.log('EmailJS Test Success:', result);
        return result;
        
    } catch (error) {
        console.error('EmailJS Test Error:', error);
        console.error('Error details:', {
            message: error.message,
            text: error.text,
            status: error.status
        });
        throw error;
    }
};

// To run this test, copy and paste in browser console:
// testEmailJS().then(result => console.log('Test completed successfully!')).catch(error => console.log('Test failed:', error));

export { testEmailJS };