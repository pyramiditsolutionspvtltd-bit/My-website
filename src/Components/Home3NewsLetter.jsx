import React from 'react';
import { Link } from 'react-router-dom';

const Home3NewsLetter = ({curve_arrow,heart_pulse_rate_white}) => {
    return (
        <div className="rs-newsletter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-newsletter__box">
                            <div className="rs-newsletter__shape">
                                <img src={curve_arrow} alt=""/>
                            </div>
                            <div className="rs-section-title">
                                <div className="top-sub-heading">
                                    <img src={heart_pulse_rate_white} alt="icon"/>
                                        <span>We carry more than just good coding skills</span>
                                </div>
                                <h2 className="title">Let's build your website!</h2>
                            </div>
                            <div className="rs-newsletter__btn">
                                <Link className="main-btn" to="/contact">Contact Us <i className="ri-arrow-right-fill"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home3NewsLetter;