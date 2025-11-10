import React, { useState } from 'react';

const Home3ContactUs = ({
    heart_pulse_rate_orange_2,
    heart_pulse_rate_orange,
    contact_image,
    contact_image02,
    circle_plus,
    plane_with_tail
}) => {
    
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
        <div id="rs-contact" className="rs-contact pt-110 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="rs-section-title black">
                            <div className="top-sub-heading">
                                <img src={heart_pulse_rate_orange_2} alt="icon" />
                                <span>Contact Us</span>
                                <img src={heart_pulse_rate_orange} alt="icon" />
                            </div>
                            <h2 className="title split-in-fade">Send message</h2>
                        </div>
                        <div className="rs-contact__form-box">
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
                                                id="phone"
                                                name="phone"
                                                placeholder="Your Phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
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
            <div className="rs-contact__thumb">
                <img src={contact_image} alt="" />
                <img className="item-2" src={contact_image02} alt="" />
            </div>
            <div className="rs-contact__shape1">
                <img src={circle_plus} alt="" />
            </div>
            <div className="rs-contact__shape2">
                <img src={plane_with_tail} alt="" />
            </div>
        </div>
    );
};

export default Home3ContactUs;
