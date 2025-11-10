import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPopup from '../layout/VideoPopUp';

const Home2About = ({ feature_about_3, about_sub_2, t_logo, project_shape2 }) => {
    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    return (
        <div id="rs-about" className="rs-about-3 pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="rs-about-3__thumb wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.4s">
                            <div className="rs-thumb">
                                <img src={feature_about_3} alt="" />
                            </div>
                            <div className="rs-play-thumb">
                                <img src={about_sub_2} alt="" />
                                <div className="rs-play">
                                    <Link className='rs-popup-videos' to='#' onClick={openVideoPopup}>
                                        <i className="ri-play-fill"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="rs-text">
                                <span>About</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-about-3__content">
                            <span><img src={t_logo} alt="" /> About Us</span>
                            <h2 className="title split-in-fade">Make it easy to do your business with us and we are best</h2>
                            <div className="pl-125 pt-40">
                                <p> Bring to the table win-win survival strategies to ensure proactive domination. At the end of
                                    the day going forward, a new normal that has evolved operational X is on the runway.</p>
                                <ul>
                                    <li>
                                        <div className="rs-icon-box">
                                            <div className="icon">
                                                <svg height="60" width="60" x="0px" y="0px" viewBox="0 0 60 60" style={{ enableBackground: "new 0 0 60 60" }} xmlSpace="preserve">
                                                    <style type="text/css">
                                                        {`.st0 {
                                                            fill: #FFEBEB;
                                                            enable-background: new;
                                                        }
                                                        .st1 {
                                                            fill: url(#SVGID_1_);
                                                        }`}
                                                    </style>
                                                    <path className="st0" d="M6,0h48c3.3,0,6,2.7,6,6v48c0,3.3-2.7,6-6,6H6c-3.3,0-6-2.7-6-6V6C0,2.7,2.7,0,6,0z" />
                                                    <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="19.7027" y1="45.5861" x2="40.3165" y2="24.9724" gradientTransform="matrix(1 0 0 -1 0 62)">
                                                        <stop offset="0" style={{ stopColor: "#3D5AFC" }} />
                                                        <stop offset="1" style={{ stopColor: "#FF3838" }} />
                                                    </linearGradient>
                                                    <path className="st1" d="M30,15l11,2.4c0.6,0.1,1,0.7,1,1.3V32c0,2.7-1.3,5.2-3.6,6.7L30,44.3l-8.4-5.6c-2.2-1.5-3.6-4-3.6-6.7V18.7
                                                    c0-0.6,0.4-1.2,1-1.3L30,15z M35.9,24.6l-6.6,6.6l-3.8-3.8l-1.9,1.9l5.7,5.7l8.5-8.5L35.9,24.6z" />
                                                </svg>
                                            </div>
                                            <span>Web Solutions</span>
                                        </div>
                                        <p> Bring to the table win-win.</p>
                                    </li>
                                    <li>
                                        <div className="rs-icon-box">
                                            <div className="icon">
                                                <svg height="60" width="60" x="0px" y="0px" viewBox="0 0 60 60" style={{ enableBackground: "new 0 0 60 60" }} xmlSpace="preserve">
                                                    <style type="text/css">
                                                        {`.st0 {
                                                            fill: #FFEBEB;
                                                            enable-background: new;
                                                        }
                                                        .st1 {
                                                            fill: url(#SVGID_2_);
                                                        }`}
                                                    </style>
                                                    <path className="st0" d="M6,0h48c3.3,0,6,2.7,6,6v48c0,3.3-2.7,6-6,6H6c-3.3,0-6-2.7-6-6V6C0,2.7,2.7,0,6,0z" />
                                                    <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="19.7027" y1="45.5861" x2="40.3165" y2="24.9724" gradientTransform="matrix(1 0 0 -1 0 62)">
                                                        <stop offset="0" style={{ stopColor: "#3D5AFC" }} />
                                                        <stop offset="1" style={{ stopColor: "#FF3838" }} />
                                                    </linearGradient>
                                                    <path className="st1" d="M30,15l11,2.4c0.6,0.1,1,0.7,1,1.3V32c0,2.7-1.3,5.2-3.6,6.7L30,44.3l-8.4-5.6c-2.2-1.5-3.6-4-3.6-6.7V18.7
                                                        c0-0.6,0.4-1.2,1-1.3L30,15z M35.9,24.6l-6.6,6.6l-3.8-3.8l-1.9,1.9l5.7,5.7l8.5-8.5L35.9,24.6z" />
                                                </svg>
                                            </div>
                                            <span>Tech Services</span>
                                        </div>
                                        <p> At the end of the day going.</p>
                                    </li>
                                </ul>
                                <Link className="main-btn-2" to="/about">Discover More <i className="ri-arrow-right-fill"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rs-shape">
                <img className=" gsap-move left-100 start-61" src={project_shape2} alt="" />
            </div>
            <VideoPopup isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl="https://www.youtube.com/embed/5CLmRIHR5Zw" />
        </div>
    );
};

export default Home2About;