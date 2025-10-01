import React, { useState } from 'react';
const Home3ContactUs = ({
    t_logo, phoneIcon, emailIcon, locationIcon, subTitle, secTitle
}) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
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

        <div id="rs-contact" className="rs-contact-3 pb-110">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="rs-line"></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-title-2">
                            <span><img src={t_logo} alt="" />{subTitle}</span>
                            <h2 className="title split-in-fade">{secTitle}</h2>
                        </div>
                        <div className="rs-form-box">
                            <form id="contact-form"  onSubmit={handleSubmit}>
                    
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
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Message...">
                                            </textarea>
                                            <button type="submit" className="main-btn-2">Send Message <i className="ri-arrow-right-fill"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-contact-3__content">
                            <div className="rs-contact-info">
                                <img src={phoneIcon} alt="" />
                                <span>Phone:</span>
                                <h4 className="title"><a href="tel:+0885898745">+040 4200 3912</a></h4>
                            </div>
                            <div className="rs-contact-info">
                                <img src={emailIcon} alt="" />
                                <span>Email:</span>
                                <h4 className="title"><a href="mailto:support@rstheme.com">support@rstheme.com</a></h4>
                            </div>
                            <div className="rs-contact-info">
                                <img src={locationIcon} alt="" />
                                <span>Address:</span>
                                <h4 className="title">2972 Westheimer Rd. Santa Ana </h4>
                            </div>
                            <div className="rs-contact-text">
                                <span>CONTACT US</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rs-shape">
                <img className="gsap-move left-100 start-91" src="assets/images/contact/contact_arrow.png" alt="" />
            </div>
        </div>
    );
};

export default Home3ContactUs;
