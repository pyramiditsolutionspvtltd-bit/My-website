import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import ProgressBar from '../layout/ProgressBar';
import { Link } from 'react-router-dom';

const Team_Details = ({ team_sidebar_1, rect, shape_item }) => {
    // Initialize EmailJS once (use your correct public key)
    React.useEffect(() => {
        emailjs.init('UmzucycBW7X00DMPJ');
    }, []);
    const [errorMsg, setErrorMsg] = useState('');
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
        setErrorMsg('');
        // Map formData to match your EmailJS template variables
        const templateParams = {
            name: formData.name,
            email: formData.email,
            topic: formData.topic,
            phone: formData.phone,
            message: formData.message
        };
        try {
            await emailjs.send(
                'service_pugop9v', // Service ID
                'template_mk2sdif', // Template ID
                templateParams
            );
            alert('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                topic: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setErrorMsg(error?.text || error?.message || 'An error occurred while sending the message.');
        }
    };

    return (
        <div className="rs-team-details pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="rs-team-details__sidebar">
                            <div className="rs-thumb">
                                <img src={team_sidebar_1} alt="" />
                                <div className="rs-shape-1">
                                    <img src={rect} alt="" />
                                </div>
                                <div className="rs-shape-2">
                                    <img src={shape_item} alt="" />
                                </div>
                            </div>
                            <div className="rs-content">
                                <h3 className="title">Anish Varma</h3>
                                <span>Designer</span>
                                <ul>
                    
                                    <li><span className="sub">Experience:</span> <span>10 Years</span></li>
                                    <li><span className="sub">Email:</span> <a href="mailto:info@gmail.com">info@gmail.com </a></li>
                                    <li><span className="sub">Phone:</span> <a href="tel:+91123456789"> +91 123 456 789 </a></li>
                                </ul>
                                <div className="rs-social">
                                    <Link to="#"><i className="ri-facebook-fill"></i></Link>
                                    <Link to="#"><i className="ri-twitter-x-fill"></i></Link>
                                    <Link to="#"><i className="ri-linkedin-fill"></i></Link>
                                    <Link to="#"><i className="ri-instagram-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="rs-team-details__content">
                            <div className="rs-content mb-35">
                                <h3 className="title">Biography</h3>
                                <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms.</p>
                            </div>
                            <div className="rs-content mb-35">
                                <h3 className="title">Career Guidelines</h3>
                                <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                            </div>
                            <div className="rs-content mb-35">
                                <h3 className="title">Experience</h3>
                                <p>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.</p>
                            </div>
                            <div className="skill-bars">
                                <ProgressBar duration={2000} targetProgress={80} title={'Business Strategy'} />
                                <ProgressBar duration={2000} targetProgress={75} title={'Cyber Security'} />
                                <ProgressBar duration={2000} targetProgress={95} title={'Software Development'} />
                            </div>
                            <div className="rs-team-details__contact mt-50">
                                <h3 className="title">Contact with me</h3>
                                <form id="contact-form" onSubmit={handleSubmit}>
                                    {errorMsg && (
                                        <div style={{ color: 'red', marginBottom: 10 }}>
                                            {errorMsg}
                                        </div>
                                    )}
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
                                                ></textarea>
                                                <button type="submit" className="main-btn">Send Message <i className="ri-arrow-right-fill"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team_Details;
