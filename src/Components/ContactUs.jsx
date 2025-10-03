import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: '',
        phone: '',
        message: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('./contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    topic: '',
                    phone: '',
                    message: ''
                });
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the message.');
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
                                                <h5 className="title"><Link to="mailto:info@support.com">pyramiditsolutions@gmail.com</Link></h5>
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
                                    <li><Link to="#"><i className="ri-linkedin-fill"></i></Link></li>
                                    <li><Link to="#"><i className="ri-youtube-fill"></i></Link></li>
                                    <li><Link to="#"><i className="ri-github-fill"></i></Link></li>
                                    <li><Link to="#"><i className="ri-vimeo-fill"></i></Link></li>
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
                                            <button type="submit" className="main-btn">
                                                Send Message <i className="ri-arrow-right-fill"></i>
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
