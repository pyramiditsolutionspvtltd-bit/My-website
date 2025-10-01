import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPopup from '../layout/VideoPopUp';

const Project_Details = ({ project_details_thumb, dingle_dual_image_first, dingle_dual_image_last, project_sidebar_icon_1, project_sidebar_icon_2, project_sidebar_icon_3, project_sidebar_icon_4, project_sidebar_icon_5, project_sidebar_icon_6, phone_white }) => {
    const [isVideoOpen, setVideoOpen] = useState(false);

    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    return (
        <div className="rs-project-details pt-90 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="rs-project-details__content mt-30 ">
                            <div className="rs-thumb">
                                <img src={project_details_thumb} alt="Project Thumbnail" />
                            </div>
                            <div className="rs-project-content">
                                <h2 className="title">Intro of the project</h2>
                                <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms.</p>
                                <h5>Challenge and solution</h5>
                                <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration. Taking seamless key performance indicators offline to maximise the long tail.</p>
                                <div className="rs-list-box">
                                    <ul>
                                        <li><i className="ri-share-forward-fill"></i> Document the short and long term goals.</li>
                                        <li><i className="ri-share-forward-fill"></i> Automated development pipelines.</li>
                                        <li><i className="ri-share-forward-fill"></i> Objectively innovate empowered.</li>
                                        <li><i className="ri-share-forward-fill"></i> Predominate extensible testing.</li>
                                    </ul>
                                    <ul>
                                        <li><i className="ri-share-forward-fill"></i> Document the short and long term goals.</li>
                                        <li><i className="ri-share-forward-fill"></i> Automated development pipelines.</li>
                                        <li><i className="ri-share-forward-fill"></i> Objectively innovate empowered.</li>
                                        <li><i className="ri-share-forward-fill"></i> Predominate extensible testing.</li>
                                    </ul>
                                </div>
                                <p>Keeping your eye on the ball while performing a deep dive on the start-up mentality to convergence on cross-platform integration. Derive convergence on cross-platform integration taking seamless key performance indicators offline to maximise the long tail.</p>
                                <div className="rs-project-sourc">
                                    <div className="rs-project-play">
                                        <img src={dingle_dual_image_first} alt="Project First Image" />
                                        <div className="play-icon">
                                            <Link className='rs-popup-videos' to='#' onClick={openVideoPopup}>
                                                <i className="ri-play-fill"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="rs-project-sourc-box">
                                        <div className="rs-thumb">
                                            <img src={dingle_dual_image_last} alt="Project Last Image" />
                                        </div>
                                        <div className="rs-project-list">
                                            <h4 className="title">Sourcing the best cases of the year.</h4>
                                            <ul>
                                                <li><i className="ri-checkbox-circle-line"></i> Provided Professional and Certified</li>
                                                <li><i className="ri-checkbox-circle-line"></i> Trusted Legal Represent</li>
                                                <li><i className="ri-checkbox-circle-line"></i> Full Range Of Quality Services</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h5>Project overview</h5>
                                <p>Keeping your eye on the ball while performing a deep dive on the start-up mentality to convergence on cross-platform integration. Derive convergence on cross-platform integration taking seamless key.</p>
                                <div className="project-author-content">
                                    <p>“Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior.”</p>
                                    <span><span>- Jhon Henry</span> , CEO at Notero JSC -</span>
                                </div>
                                <div className="rs-project-bar">
                                    <div className="rs-social">
                                        <ul>
                                            <li><Link to="#"><i className="ri-facebook-fill"></i></Link></li>
                                            <li><Link to="#"><i className="ri-twitter-x-fill"></i></Link></li>
                                            <li><Link to="#"><i className="ri-linkedin-fill"></i></Link></li>
                                            <li><Link to="#"><i className="ri-instagram-line"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="rs-project-switch-btn">
                                        <ul>
                                            <li><Link className="main-btn" to="#"><i className="ri-arrow-left-fill"></i> Prev Post</Link></li>
                                            <li><Link className="main-btn" to="#">Next Post <i className="ri-arrow-right-fill"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="rs-project-details__sidebar mt-30">
                            <div className="project-sidebar-category">
                                <h4 className="title">Project Information</h4>
                                <div className="sidebar-category-box">
                                    <div className="sidebar-category-item">
                                        <div className="rs-icon">
                                            <img src={project_sidebar_icon_1} alt="Client Icon" />
                                        </div>
                                        <div className="rs-content">
                                            <h5>Client</h5>
                                            <span>Microsoft Holing Ltd</span>
                                        </div>
                                    </div>
                                    <div className="sidebar-category-item">
                                        <div className="rs-icon">
                                            <img src={project_sidebar_icon_2} alt="Country Icon" />
                                        </div>
                                        <div className="rs-content">
                                            <h5>Country</h5>
                                            <span>USA</span>
                                        </div>
                                    </div>
                                    <div className="sidebar-category-item">
                                        <div className="rs-icon">
                                            <img src={project_sidebar_icon_3} alt="Technologies Icon" />
                                        </div>
                                        <div className="rs-content">
                                            <h5>Core technologies</h5>
                                            <span>iOS/ PHP/ Laravel/ Git</span>
                                        </div>
                                    </div>
                                    <div className="sidebar-category-item">
                                        <div className="rs-icon">
                                            <img src={project_sidebar_icon_4} alt="Industry Icon" />
                                        </div>
                                        <div className="rs-content">
                                            <h5>Industry</h5>
                                            <span>IT Solution, Design</span>
                                        </div>
                                    </div>
                                    <div className="sidebar-category-item">
                                        <div className="rs-icon">
                                            <img src={project_sidebar_icon_5} alt="Date Icon" />
                                        </div>
                                        <div className="rs-content">
                                            <h5>Date</h5>
                                            <span>February 22th, 2022</span>
                                        </div>
                                    </div>
                                    <div className="sidebar-category-item">
                                        <div className="rs-icon">
                                            <img src={project_sidebar_icon_6} alt="Cost Icon" />
                                        </div>
                                        <div className="rs-content">
                                            <h5>Cost</h5>
                                            <span>USD 1,50,499</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-category-contact mt-40">
                                <h4 className="title">Get Professional Help</h4>
                                <span>Contact Us</span>
                                <img src={phone_white} alt="Phone Icon" />
                                <div className="rs-link">
                                    <Link to="tel:+85526691234">+855 (2669) 1234</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopup isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl="https://www.youtube.com/embed/5CLmRIHR5Zw" />
        </div>
    );
};

export default Project_Details;
