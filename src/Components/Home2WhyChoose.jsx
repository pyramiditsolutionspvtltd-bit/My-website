import React from 'react';
import { Link } from 'react-router-dom';

const Home2WhyChoose = ({ feature_img, expericence_bg_image, red_shape_top, red_shape_bottom, ch_ico2, t_logo, ch_ico3, ch_ico4, faq_arrow, counter_icon1 }) => {
    const chooseItems = [
        { image: ch_ico2, title: 'First Growing Process', details: 'Bring to the table win-win survival strategies to ensur.' },
        { image: ch_ico3, title: 'Dedicated Support 24/7', details: 'Leverage agile frameworks to provide a robust.' },
        { image: ch_ico4, title: 'Clean Code Design', details: 'Podcasting operational change management inside.' },
    ]
    return (
        <div className="rs-why-choose rs-why-choose-3 pt-140 pb-90">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="rs-why-choose__thumb wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.4s">
                            <img src={feature_img} alt="" />
                            <div className="shape-1">
                                <img src={expericence_bg_image} alt="" />
                                <img className="item-2" src={expericence_bg_image} alt="" />
                            </div>
                            <div className="shape-2">
                                <img src={red_shape_top} alt="" />
                            </div>
                            <div className="shape-3">
                                <img src={red_shape_bottom} alt="" />
                            </div>
                            <div className="rs-why-choose-3__counter">
                                <div className="counter-item">
                                    <div className="icon">
                                        <img src={counter_icon1} alt="" />
                                    </div>
                                    <h3 className="title"><span>100</span>+</h3>
                                </div>
                                <p> Professional Members</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-why-choose__content">
                            <div className="section-title-2">
                                <span><img src={t_logo} alt="" /> Why Choose Our Services! </span>
                                <h2 className="title split-in-fade">Leading the best digital agency</h2>
                                <p> Bring to the table win-win survival strategies to ensure proactive domination At the end of the day.</p>
                            </div>
                            <div className="rs-why-choose__item-list">
                                <ul>
                                    {
                                        chooseItems && chooseItems.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <div className="thumb">
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">{item.title}</h4>
                                                        <p>{item.details}</p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <p>Need Consultancy? <Link to="/contact">Contact Us <i className="ri-arrow-right-up-line"></i></Link> </p>
                                <div className="content-shape">
                                    <img src={faq_arrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home2WhyChoose;