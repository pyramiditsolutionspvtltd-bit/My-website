import React from 'react';
import { Link } from 'react-router-dom';

const Home3ProjectCTA = ({ heart_pulse_rate_white, work_gradient_border, dark_Border, handshake2,enterprise }) => {
    const businessData = [
        { borderImg1: work_gradient_border, borderImg2: dark_Border, icon: handshake2, url:'#', title: 'Start Up Business' },
        { borderImg1: work_gradient_border, borderImg2: dark_Border, icon: handshake2, url:'#', title: 'Small & Medium Business' },
        { borderImg1: work_gradient_border, borderImg2: dark_Border, icon: handshake2, url:'#', title: 'Agencies' },
        { borderImg1: work_gradient_border, borderImg2: dark_Border, icon: handshake2, url:'#', title: 'Enterprise' },
    ];

    return (
        <section className="rs-cta pt-95 pb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="rs-section-title">
                            <div className="top-sub-heading">
                                <img src={heart_pulse_rate_white} alt="icon" />
                                <span>Work </span>
                                <img src={heart_pulse_rate_white} alt="icon" />
                            </div>
                            <h2 className="title split-in-fade">
                                Who we <span className="color">work</span> with
                            </h2>
                            <p>Phosfluorescently engage worldwide methodologies with in web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue technology scalable.</p>
                            <Link className="main-btn" to="/appointment">Let's Work Together <i className="ri-arrow-right-fill"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-cta__main-box">
                            <div className="row">
                                {businessData && businessData.map((data, index) => (
                                    <div key={index} className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="rs-cta__item-box">
                                            <div className="rs-image">
                                                <img src={data.borderImg1} alt="border" />
                                                <img className="item-2" src={data.borderImg2} alt="border" />
                                            </div>
                                            <div className="rs-cta__box">
                                                <div className="bg-icon" style={{ backgroundImage: `url(${enterprise})` }}></div>
                                                <div className="icon">
                                                    <img src={data.icon} alt="icon" />
                                                </div>
                                                <h4 className="title"><Link to={data.url}>{data.title}</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home3ProjectCTA;
