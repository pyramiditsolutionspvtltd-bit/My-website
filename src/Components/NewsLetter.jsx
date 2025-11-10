import React from 'react';
import { Link } from 'react-router-dom';


const NewsLetter = ({ close_ico_yeloow_grad, circle_white }) => {
    return (
        <div className="rs-newsletter-2 pt-95 pb-110">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="rs-newsletter-2__box">
                            <h2 className="title split-in-fade">Need any kind of IT solution for <span>your business?</span></h2>
                            <div className="rs-newsletter-2__btn">
                                <Link className="main-btn" to="/contact">Contact Us <i className="ri-arrow-right-fill"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
            <div className="rs-newsletter-2__shape-1">
                <img className="gsap-rotate" src={close_ico_yeloow_grad} alt="" />

            </div>
            <div className="rs-newsletter-2__shape-2">
                <img className="gsap-move down-100 start-91" src={circle_white} alt="" />
            </div>
        </div>
    );
};

export default NewsLetter;