import React from 'react';
import { Link } from 'react-router-dom';

const BrandContact = ({ heart_pulse_rate_orange_2, heart_pulse_rate_orange, partner1, partner_white_1, partner2, partner_white_2, partner3, partner_white_3, partner4, partner_white_4, partner5, partner_white_5, partner6, partner_white_6, partner7, partner_white_7, partner8, partner_white_8, brandClass }) => {
    const brandLogo = [
        {
            linkUrl: '#',
            logo1: partner1,
            logo2: partner_white_1
        },
        {
            linkUrl: '#',
            logo1: partner2,
            logo2: partner_white_2
        },
        {
            linkUrl: '#',
            logo1: partner3,
            logo2: partner_white_3
        },
        {
            linkUrl: '#',
            logo1: partner4,
            logo2: partner_white_4
        },
        {
            linkUrl: '#',
            logo1: partner5 || partner1,
            logo2: partner_white_5 || partner_white_1
        },
        {
            linkUrl: '#',
            logo1: partner6 || partner2,
            logo2: partner_white_6 || partner_white_2
        },
        {
            linkUrl: '#',
            logo1: partner7 || partner3,
            logo2: partner_white_7 || partner_white_3
        },
        {
            linkUrl: '#',
            logo1: partner8 || partner4,
            logo2: partner_white_8 || partner_white_4
        },
    ];

    return (
        <div className='rs-contact-brand pt-115 pb-90'>
            <div className="container">
                {!brandClass &&
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rs-brand__top-title">
                                <img src={heart_pulse_rate_orange_2} alt="" />
                                <span>Our Brands with work Pyramid IT Solutions</span>
                                <img src={heart_pulse_rate_orange} alt="" />
                            </div>
                        </div>
                    </div>
                }
                <div className='rs-contact-brand__box mb-30'>
                    {brandLogo.map((logo, index) => (
                        <div key={index} className='brand-item'>
                            <Link to={logo.linkUrl}>
                                <>
                                    <img src={logo.logo1} alt="" />
                                    <img className="item-2" src={logo.logo2} alt="" />
                                </>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandContact;
