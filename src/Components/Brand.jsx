import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Brand = ({ heart_pulse_rate_orange_2, heart_pulse_rate_orange, partner1, partner_white_1, partner2, partner_white_2, partner3, partner_white_3, partner4, partner_white_4, partner5, partner_white_5, partner6, partner_white_6, partner7, partner_white_7, sectitlecls, partner8, partner_white_8, brandClass, previewPhone,previewPhoneExt,previewSM,previewMd,preview }) => {
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
        <div className={`rs-brand ${brandClass ? brandClass : 'rs-brand-2'} pb-60 pt-60`}>
            <div className="container">
                {!brandClass &&
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={`rs-brand__top-title ${sectitlecls ? sectitlecls : ''}`}>
                                <img src={heart_pulse_rate_orange_2} alt="" />
                                <span>Our brands with Pyramid IT Solutions</span>
                                <img src={heart_pulse_rate_orange} alt="" />
                            </div>
                        </div>
                    </div>
                }
                <Swiper
                    className={`${brandClass ? brandClass : 'rs-brand__slider'}`}
                    spaceBetween={20}
                    slidesPerView={5}
                    loop={true}
                    centeredSlides={false}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    
                    modules={[Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: previewPhone || 2,
                            spaceBetween: 10,
                        },
                        576: {
                            slidesPerView: previewPhoneExt || 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: previewSM || 3,
                            spaceBetween: 14,
                        },
                        992: {
                            slidesPerView: previewMd || 4,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: preview || 5,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {brandLogo.map((logo, index) => (
                        <SwiperSlide key={index} className='rs-brand-slider-item'>
                            <Link to={logo.linkUrl}>
                                <>
                                    <img src={logo.logo1} alt="" />
                                    <img className="item-2" src={logo.logo2} alt="" />
                                </>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Brand;
