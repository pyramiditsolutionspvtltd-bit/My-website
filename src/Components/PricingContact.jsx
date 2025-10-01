import React from 'react';
import { Link } from 'react-router-dom';

const PricingContact = ({phone_call_1,email_icon_img}) => {
    return (
        <div className="rs-pricing-contact pt-90 pb-90">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="rs-pricing-contact__content">
                        <h4 className="title">Let’s create big stories together.</h4>
                        <p>Mobile is in our nerves. We don’t just build apps, we create brand Choosing us will be your best decision.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="rs-pricing-contact__info">
                        <div className="info-box">
                            <div className="rs-icon">
                                <img src={phone_call_1} alt=""/>
                            </div>
                            <div className="rs-content">
                                <h4 className="title">Contact Us</h4>
                                <Link to="tel:6845550102">(684) 555-0102</Link>
                            </div>
                        </div>
                        <div className="info-box mt-20">
                            <div className="rs-icon">
                                <img src={email_icon_img} alt=""/>
                            </div>
                            <div className="rs-content">
                                <h4 className="title">Email Us</h4>
                                <Link to="mailto:info@yourdomail.com">info@yourdomail.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default PricingContact;