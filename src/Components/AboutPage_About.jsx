import { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPopup from '../layout/VideoPopUp';
import PropTypes from 'prop-types';

const AboutPage_About = ({ about_image, count_down_experience_icon, heart_pulse_rate_orange_2, heart_pulse_rate_orange, arrow_purple, passClass }) => {

    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);

    return (
        <div id="rs-about" className={`${passClass ? passClass : 'rs-about rs-about-page'} pb-120 pt-120`}>
            {
                passClass &&
                <div className="rs-about__shape">
                    <img className="gsap-move down-200 start-91" src={arrow_purple} alt=""/>
                </div>
            }
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="rs-about__thumb-box">
                            <img src={about_image} alt="" />
                            <div className="rs-about__play-box">
                                <span>Intro</span>
                                <div className="play-icon">
                                    <Link className='rs-popup-videos' to='#' onClick={openVideoPopup}>
                                        <i className="ri-play-fill"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="rs-about__countdown-box">
                                <div className="icon">
                                    <img src={count_down_experience_icon} alt="" />
                                </div>
                                <div className="coundown-text">
                                    <span><span className="rs-count">20</span>+</span>
                                    <h4 className="title"> Years Experience</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-about__box">
                            <div className="top-sub-heading">
                                <img src={heart_pulse_rate_orange_2} alt="icon" />
                                <span>Who We Are</span>
                                <img src={heart_pulse_rate_orange} alt="icon" />
                            </div>
                            <h2 className="rs-about__title title">
                               One of the Fast-growing Networking Company based at Hyderabad
                            </h2>
                            <p className="description">
                                Pyramid IT Solutions is a trusted end-to-end IT infrastructure service provider, delivering expertise across design, implementation, configuration, and management. With a strong focus on Wired, Wireless, and Optical Fiber installation and management, we serve small, medium, and large campus networks with precision and reliability. Headquartered in Hyderabad and operating across Pune, Bangalore, and Visakhapatnam, Pyramid has emerged as one of India’s fastest-growing networking companies.
                            </p>
                               <br></br> 
                            <p>
                                Our expertise lies in delivering customer-focused IT services to organizations of all sizes, backed by a team of highly skilled and technically certified professionals. With a strong emphasis on continuous skill development, we have built capabilities across multiple technologies, including Microsoft, Cisco, Juniper, FortiGate, D-Link, SYSTIMAX, AMP, and Clipsal. This technical strength, combined with our commitment to excellence, has enabled us to build long-term relationships and consistently deliver value to our clients.
                            </p>
                            <div style={{paddingTop: '30px'}}>
                                <h4>Key Strengths of Pyramid IT Solutions:</h4>
                                <br />
                                <ul className="strength-list">
                                    <li><i className="ri-check-line"></i> End-to-end network design and implementation</li>
                                    <li><i className="ri-check-line"></i> One of the fastest-growing networking companies in Hyderabad.</li>
                                    <li><i className="ri-check-line"></i> Specialized in Wired, Wireless & Optical Fiber solutions</li>
                                    <li><i className="ri-check-line"></i> Proven track record with SMBs and large campus networks</li>
                                    <li><i className="ri-check-line"></i> Authorized partners with leading global IT brands</li>
                                    <li><i className="ri-check-line"></i> 20+ years of industry experience across multiple verticals.</li>
                                    <li><i className="ri-check-line"></i> Strong execution of turnkey voice & data solutions.</li>
                                    <li><i className="ri-check-line"></i> Certified team with Cisco, Juniper & HP</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isVideoOpen && (
                <VideoPopup
                    isVideoOpen={isVideoOpen}
                    setVideoOpen={setVideoOpen}
                    videoId={'s9xk77X4m5c'} 
                />
            )}
        </div>
    );
};



AboutPage_About.propTypes = {
    about_image: PropTypes.string,
    count_down_experience_icon: PropTypes.string,
    heart_pulse_rate_orange_2: PropTypes.string,
    heart_pulse_rate_orange: PropTypes.string,
    arrow_purple: PropTypes.string,
    passClass: PropTypes.string
};

export default AboutPage_About;
