import React, { useState } from 'react';

const AppointmentContent = ({ team_image_large }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: '',
        phone: '',
        message: ''
    });

    const [formMessages, setFormMessages] = useState('');

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
            // Here you can add your form submission logic
            // For example, using fetch to send the form data to a server
            // Simulate a successful submission with a timeout
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay
            setFormMessages('Message Sent successfully!');
            setFormData({
                name: '',
                email: '',
                topic: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            setFormMessages('Failed to submit the form. Please try again.');
        }
    };

    return (
        <div className="rs-appointment-box pt-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5"></div>
                    <div className="col-lg-7">
                        <div className="rs-appointment-box__form">
                            <div className="rs-section-title pb-45">
                                <h2 className="title split-in-fade">Send a question to an expert</h2>
                                <p>Completely synergize resource taxing relationships via premier niche markets professionally.</p>
                            </div>
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                id="name"
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
                                                id="email"
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
                                                id="topic"
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
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <textarea
                                                name="message"
                                                id="message"
                                                placeholder="Message..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                            <button type="submit" className="main-btn">Send Message <i className="ri-arrow-right-fill"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <p id="form-messages" className="form-message">{formMessages}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rs-thumb">
                <img src={team_image_large} alt="" />
            </div>
        </div>
    );
};

export default AppointmentContent;
