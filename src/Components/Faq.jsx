/* eslint-disable no-unused-vars */
// import { Link } from 'react-router-dom';
// import Common_Question from './Common_Question';
import PropTypes from 'prop-types';

const Faq = ({ heart_pulse_rate_orange_2, heart_pulse_rate_orange, faq_left_img, couple_ball_layer, addClass, activeItem, itemsArray }) => {
    // FAQ Section is currently hidden
    return null;
    
    /* FAQ Section - Currently Hidden
    return (
        <div className="rs-faq pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="rs-faq__thumb wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.4s">
                            <img src={faq_left_img} alt="faq" />
                            <div className="rs-shape">
                                <img src={couple_ball_layer} alt="faq" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-faq__content">
                            <div className="rs-section-title black">
                                <div className="top-sub-heading">
                                    <img src={heart_pulse_rate_orange_2} alt="icon" />
                                    <span>FAQ</span>
                                    <img src={heart_pulse_rate_orange} alt="icon" />
                                </div>
                                <h2 className="title split-in-fade">Frequently asked questions</h2>
                            </div>
                            <Common_Question
                                addClass = {addClass}
                                activeItem = {activeItem}
                                selectedIndices={itemsArray}
                            />
                            <div className="rs-faq__link">
                                <Link className="main-btn" to="/contact">Any Questions? <i className="ri-arrow-right-fill"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    */
};

Faq.propTypes = {
    heart_pulse_rate_orange_2: PropTypes.string,
    heart_pulse_rate_orange: PropTypes.string,
    faq_left_img: PropTypes.string,
    couple_ball_layer: PropTypes.string,
    addClass: PropTypes.string,
    activeItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    itemsArray: PropTypes.array,
};

export default Faq;