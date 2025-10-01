import React from 'react';
import { Link } from 'react-router-dom';

const Home2Banner = ({banner_thumb_shape1,banner_thumb_shape2,line_shape_banner_img,banner_thumb1}) => {
    return (
        <div className="rs-banner-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="rs-banner-3__content">
                            <span className=" wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0s"> Award Winning Company </span>
                            <h1 className="title wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.4s">Website & <span>Application</span> development agency</h1>
                            <p className="wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.8s">Leverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches data commnunication. </p>
                            <ul className=" wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">
                                <li><Link className="main-btn-2" to="/contact">Get a Quote <i className="ri-arrow-right-fill"></i></Link></li>
                                <li><Link className="main-btn-2 main-btn-3" to="/about"><span>Explore Now</span> <i className="ri-arrow-right-fill"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="rs-banner-3__thumb wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.6s">
                            <div className="shape-1">
                                <img src={banner_thumb_shape1} alt=""/>
                            </div>
                            <div className="shape-2">
                                <img src={banner_thumb_shape2} alt=""/>
                            </div>
                            <div className="shape-3">
                                <img className="gsap-move down-100 start-31" src={line_shape_banner_img} alt=""/>
                            </div>
                            <div className="main-thumb">
                                <img src={banner_thumb1} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rs-banner-3__text">
                <h2 className="title">TECHZEN</h2>
            </div>
        </div>
    );
};

export default Home2Banner;