import React from 'react';


const Home3WhyChoose = ({chose_left_shape,chose_right_shape,why_choose_left1,heart_pulse_rate_orange_2,heart_pulse_rate_orange,ch_ico2,ch_ico3,ch_ico1}) => {
    return (
        <div className="rs-why-choose pt-120 pb-90">
        <div className="rs-why-choose__shape-1">
            <img src={chose_left_shape} alt=""/>
        </div>
        <div className="rs-why-choose__shape-2">
            <img src={chose_right_shape} alt=""/>
        </div>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="rs-why-choose__thumb">
                        <img src={why_choose_left1} alt=""/>
                        <img className="item-2" src={why_choose_left1} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="rs-why-choose__content">
                        <div className="rs-section-title black">
                            <div className="top-sub-heading">
                                <img src={heart_pulse_rate_orange_2} alt="icon"/>
                                <span>Why Choose Us</span>
                                <img src={heart_pulse_rate_orange} alt="icon"/>
                            </div>
                            <h2 className="title split-in-fade">Reasons to <span className="color">count</span> on us</h2>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination At the end of the day.</p>
                        </div>
                        <div className="rs-why-choose__item-list">
                            <ul>
                                <li>
                                    <div className="thumb">
                                        <img src={ch_ico2} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title"> First Growing Process</h4>
                                        <p> Bring to the table win-win survival strategies to ensur.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="thumb">
                                        <img src={ch_ico3} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title"> Dedicated Support 24/7</h4>
                                        <p> Leverage agile frameworks to provide a robust.</p>  
                                    </div>
                                </li>
                                <li>
                                    <div className="thumb">
                                        <img src={ch_ico1} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title"> AI Machine & Deep Learning</h4>
                                        <p> Podcasting operational change management inside.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Home3WhyChoose;