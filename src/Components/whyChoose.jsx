import ProgressBar from '../layout/ProgressBar';


const whyChoose = ({ heart_pulse_rate_orange_2, heart_pulse_rate_orange, chose_right_left, chose_right_right, chose_right_bottom, spacingClass }) => {

    return (
        <div className={`rs-why-choose-2 ${spacingClass ? spacingClass : 'pb-85'}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 md-mb-40">
                        <div className="why-choose-2__content">
                            <div className="rs-section-title black mb-36">
                                <div className="top-sub-heading">
                                    <img src={heart_pulse_rate_orange_2} alt="icon" />
                                    <span>Why choose Pyramid IT Solutions?</span>
                                    <img src={heart_pulse_rate_orange} alt="icon" />
                                </div>
                                <h2 className="title split-in-fade">20+ Years of Delivering Trusted IT Solutions</h2>
                                <p>We integrate innovation with expertise to deliver customized IT solutions that empower businesses to scale, secure and succeed in digital era.</p>
                            </div>
                            <div className="skill-bars" >
                                <ProgressBar duration={2000} targetProgress={80} title={'Cybersecurity'}/>
                                <ProgressBar duration={2000} targetProgress={85} title={'Wireless Solutions'}/>
                                <ProgressBar duration={2000} targetProgress={95} title={'FTTH (Fiber to the home)'}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-why-choose-2__thumb wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.4s">
                            <div className="rs-thumb-1">
                                <img src={chose_right_left} alt="" />
                            </div>
                            <div className="rs-thumb-2">
                                <img src={chose_right_right} alt="" />
                                <img src={chose_right_bottom} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default whyChoose;
