import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCTA = ({ call_to_action_man, passClass }) => {
    return (
        <>
            {
                call_to_action_man ?
                    <div className={`${passClass === 'rs-project-cta-box' ? 'rs-project-cta  rs-project-details-cta mb-120' : 'rs-project-cta pt-80 pb-90 loaded'}`}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className={`${passClass==='rs-project-cta-box' ? 'rs-project-cta-box pt-80 pb-90' : ''}`}>
                                        <div className="rs-project-cta__content">
                                            <h2 className="title">Do you have similar development requirements?</h2>
                                            <p> Collaboratively administrate empowered markets via plug-and-play networks dynamically procrastinate</p>
                                            <Link className="main-btn mt-40" to="/contact">Contact With Us <i className="ri-arrow-right-fill"></i></Link>
                                        </div>
                                        {
                                            passClass === 'rs-project-cta-box' &&
                                            <div className="rs-thumb">
                                                <img src={call_to_action_man} alt="" />
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            passClass === 'rs-project-cta' &&
                            <div className="rs-thumb">
                                <img src={call_to_action_man} alt="" />
                            </div>
                        }
                    </div> : <div className="rs-cta-3 pb-110 pt-90">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="rs-cta-3__box">
                                        <h2 className="title split-in-fade">Let’s Create Big Stories Together</h2>
                                        <p> Mobile is in our nerves. We don’t just build apps, we create brand. Choosing us will be your best decision.</p>
                                        <Link className="main-btn-2" to="/contact"> Get A Quote <i className="ri-arrow-right-fill"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>

    );
};

export default ProjectCTA;