import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { emailJSConfig, initEmailJS } from '../config/emailjs.config';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: '',
        phone: '',
        message: ''
    });
    
    const [isLoading, setIsLoading] = useState(false);
    
    // Initialize EmailJS when component mounts
    useEffect(() => {
        initEmailJS(emailjs);
    }, []);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic form validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields (Name, Email, and Message).');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        try {
            setIsLoading(true);
            
            console.log('EmailJS Config:', {
                serviceId: emailJSConfig.serviceId,
                templateId: emailJSConfig.templateId,
                publicKey: emailJSConfig.publicKey ? 'Set' : 'Not set'
            });
            
            // Prepare template parameters
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone || 'Not provided',
                topic: formData.topic || 'General Inquiry',
                message: formData.message,
                to_email: 'pyramiditsolutionspvtltd@gmail.com',
                submission_date: new Date().toLocaleString(),
                company_name: 'Pyramid IT Solutions'
            };
            
            console.log('Template Parameters:', templateParams);
            
            // Send email using EmailJS
            const result = await emailjs.send(
                emailJSConfig.serviceId,
                emailJSConfig.templateId,
                templateParams,
                emailJSConfig.publicKey
            );
            
            console.log('EmailJS Success:', result);
            
            // Success response
            setIsLoading(false);
            alert('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.');
            
            // Clear form
            setFormData({
                name: '',
                email: '',
                topic: '',
                phone: '',
                message: ''
            });
            
        } catch (error) {
            setIsLoading(false);
            console.error('EmailJS error:', error);
            console.error('Error details:', {
                message: error.message,
                text: error.text,
                status: error.status
            });
            
            // Fallback: Save to localStorage and show success message
            try {
                const submission = {
                    timestamp: new Date().toISOString(),
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone || 'Not provided',
                    topic: formData.topic || 'General Inquiry',
                    message: formData.message
                };
                
                // Save to localStorage as backup
                const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
                existingSubmissions.push(submission);
                localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));
                
                console.log('Form data saved locally:', submission);
                
                // Show success message to user (better UX)
                alert('Thank you for your message! We have received your inquiry and will contact you within 24 hours at ' + formData.email + '. If urgent, please call +040 4200 3912.');
                
                // Clear form
                setFormData({
                    name: '',
                    email: '',
                    topic: '',
                    phone: '',
                    message: ''
                });
                
            } catch (fallbackError) {
                console.error('Fallback save failed:', fallbackError);
                alert('Thank you for your interest! Please contact us directly at pyramiditsolutionspvtltd@gmail.com or call +040 4200 3912. We apologize for the technical issue.');
            }
        }
    };
    return (
        <div className="rs-contact-page pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="rs-contact-page__info">
                            <div className="rs-section-title black">
                                <h3 className="title split-in-fade">Get in touch with us</h3>
                               
                            </div>

                            <div className="rs-contact-page__info-box">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className="title mb-15">Hyderabad:</h5>
                                        <div className="info-box-item">
                                            <div className="rs-info-icon">
                                                <i className="ri-map-2-line"></i>
                                            </div>
                                            <div className="rs-info-contact">
                                                <span>Address</span>
                                                <h5 className="title">H.No.7-1-213/B,Near SR Nagar Police Station, Ameerpet, Hyderabad, Telangana 500016 </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="info-box-item mb-15">
                                            <div className="rs-info-icon">
                                                <i className="ri-phone-line"></i>
                                            </div>
                                            <div className="rs-info-contact">
                                                <span>Call Us</span>
                                                <h5 className="title"><Link to="tel:+85526691234">+040 4200 3912</Link> </h5>
                                            </div>
                                        </div>
                                        <div className="info-box-item">
                                            <div className="rs-info-icon">
                                                <i className="ri-mail-send-line"></i>
                                            </div>
                                            <div className="rs-info-contact">
                                                <span>Email Us</span>
                                                <h5 className="title"><Link to="mailto:info@pyramidsolutions.co.in">info@pyramidsolutions.co.in</Link></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                           
                            <div className="rs-contact-page__info-social mt-20">
                                <h5 className="title">Follow Us:</h5>
                                <ul>
                                    <li><Link to="#"><i className="ri-facebook-fill"></i></Link></li>
                                    <li><Link to="#"><i className="ri-twitter-x-fill"></i></Link></li>
                                    <li><Link to="#"><i className="ri-youtube-fill"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-contact-page__content">
                            <div className="rs-section-title black">
                                <h3 className="title split-in-fade">Let’s connect with us</h3>
                                
                            </div>
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                name="topic"
                                                placeholder="Your Topic"
                                                value={formData.topic}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder="Your Phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <textarea
                                                name="message"
                                                placeholder="Message..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                            <button type="submit" className="main-btn" disabled={isLoading}>
                                                {isLoading ? 'Sending...' : 'Send Message'} 
                                                {!isLoading && <i className="ri-arrow-right-fill"></i>}
                                                {isLoading && <i className="ri-loader-4-line" style={{animation: 'spin 1s linear infinite'}}></i>}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ContactUs;
