import React, { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Common_Testimonial_Iteam = ({ rating_1, quote_white, testi1, testi2, testi3, testi4, testi5, flag_1, flag_2, flag_3, flag_4, flag_5, navStyle2,previewPhone,previewPhoneExt,previewSM,previewMd,preview }) => {

    const sliderRef = useRef(null);
    const testimonial = [
        {
            _id: 1,
            details: 'Worldwide phosfluorescently engage methodologies with in web-enabled technology. Interactively coordinate proactive e-commerce via.',
            ratingImg: rating_1,
            imgCommon: quote_white,
            testiImg: testi1,
            name: 'Matthew Taylor',
            designation: 'SEO & Founder, Facebook',
            flagImg: flag_1,
            country: ' New York, USA'
        },
        {
            _id: 2,
            details: 'Engage worldwide phosfluorescently methodologies with in web-enabled technology. Interactively coordinate proactive e-commerce via.',
            ratingImg: rating_1,
            imgCommon: quote_white,
            testiImg: testi2,
            name: 'Lynda Robards',
            designation: 'Company SEO, Google',
            flagImg: flag_2,
            country: 'Canada'
        },
        {
            _id: 3,
            details: 'Worldwide engage phosfluorescently methodologies with in web-enabled technology. Interactively coordinate proactive e-commerce via.',
            ratingImg: rating_1,
            imgCommon: quote_white,
            testiImg: testi3,
            name: 'Esther Howard',
            designation: 'SEO & Founder, Facebook',
            flagImg: flag_3,
            country: 'Donkey Town, UK'
        },
        {
            _id: 4,
            details: 'Phosfluorescently worldwide engage methodologies with in web-enabled technology. Interactively coordinate proactive e-commerce via.',
            ratingImg: rating_1,
            imgCommon: quote_white,
            testiImg: testi4,
            name: 'Ana Martins',
            designation: 'CEO, Bribbble LLC',
            flagImg: flag_4,
            country: 'Madrid, Spain'
        },
        {
            _id: 5,
            details: 'Phosfluorescently engage worldwide methodologies with in web-enabled technology. Interactively coordinate proactive e-commerce via.',
            ratingImg: rating_1,
            imgCommon: quote_white,
            testiImg: testi5,
            name: 'Nicolas Ribeiro',
            designation: 'HR, Envato',
            flagImg: flag_5,
            country: 'Sydney, Australia'
        },
    ];

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <>
            <Swiper className="rs-carousel owl-carousel nav-style1"
                spaceBetween={30}
                slidesPerView={preview || 3}
                freeMode={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                ref={sliderRef}
                breakpoints={{
                    0: {
                        slidesPerView: previewPhone || 1,
                        spaceBetween: 30,
                    },
                    576: {
                        slidesPerView: previewPhoneExt || 1,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: previewSM || 1,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: previewMd || 2,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: preview || 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {
                    testimonial.map(testi => (
                        <SwiperSlide key={testi._id} className="rs-testimonial__item">
                            <div className="rs-testimonial-content-box">
                                <p>{testi.details}</p>
                                <div className="rs-ratings">
                                    <img src={testi.ratingImg} alt="" />
                                </div>
                                <div className="rs-quote">
                                    <img src={testi.imgCommon} alt="" />
                                </div>
                            </div>
                            <div className="rs-testimonial-user">
                                <div className="thumb">
                                    <img src={testi.testiImg} alt="" />
                                </div>
                                <div className="content">
                                    <h4 className="title">{testi.name}</h4>
                                    <span>{testi.designation}</span>
                                    <div className="country">
                                        <img src={testi.flagImg} alt="" />
                                        <span> {testi.country}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {(navStyle2 === true) && (
                <div className='owl-nav'>
                    <div className="owl-prev" onClick={handlePrev}><i className="ri-arrow-left-fill"></i> <span>PREV</span></div>
                    <div className="owl-next" onClick={handleNext}><span>NEXT</span> <i className="ri-arrow-right-fill"></i></div>
                </div>
            )}
        </>
    );
};

export default Common_Testimonial_Iteam;
