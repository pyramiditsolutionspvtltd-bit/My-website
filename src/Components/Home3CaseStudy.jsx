import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';

const Home3CaseStudy = ({ heart_pulse_rate_white, Portfolio1, Portfolio2, Portfolio3,previewPhone,previewPhoneExt,previewSM,previewMd,preview, showPagination }) => {
    const sliderRef = useRef(null);
    const caseStudyItems = [
        {
            imgSrc: Portfolio1,
            title: "Graphic Design",
            subtitle: "Graphic Testing",
            link: "/project-details"
        },
        {
            imgSrc: Portfolio2,
            title: "Web Design",
            subtitle: "Graphic Testing",
            link: "/project-details"
        },
        {
            imgSrc: Portfolio3,
            title: "Product Design",
            subtitle: "Graphic Testing",
            link: "/project-details"
        }
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
        <section id="rs-portfolios" className="rs-case-study pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="rs-section-title">
                            <div className="top-sub-heading">
                                <img src={heart_pulse_rate_white} alt="icon" />
                                <span>Case Study</span>
                                <img src={heart_pulse_rate_white} alt="icon" />
                            </div>
                            <h2 className="title split-in-fade">Our recent launched <span className="color">projects available</span> into market</h2>
                            <Link className="main-btn" to="/our-projects">View All Projects <i className="ri-arrow-right-fill"></i></Link>
                            <div className='owl-nav'>
                                <div className="owl-prev" onClick={handlePrev}><i className="ri-arrow-left-fill"></i> <span>PREV</span></div>
                                <div className="owl-next" onClick={handleNext}><span>NEXT</span> <i className="ri-arrow-right-fill"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="rs-case-study__slider">
                            <Swiper className="rs-carousel owl-carousel nav-style1"
                                spaceBetween={30}
                                slidesPerView={1}
                                modules={[Pagination,Autoplay]}
                                pagination={showPagination ? showPagination : false}
                                freeMode={true}
                                autoplay={true}
                                loop={true}
                                navigation={{
                                    prevEl: '.prev',
                                    nextEl: '.next',
                                }}
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
                                        slidesPerView: previewSM || 2,
                                        spaceBetween: 30,
                                    },
                                    992: {
                                        slidesPerView: previewMd || 2,
                                        spaceBetween: 30,
                                    },
                                    1200: {
                                        slidesPerView: preview || 2,
                                        spaceBetween: 30,
                                    },
                                }}
                            >
                                {caseStudyItems.map((study, index) => (
                                    <SwiperSlide className="items" key={index}>
                                        <div className="rs-case-study__slider-item">
                                            <img src={study.imgSrc} alt={study.title} />
                                            <div className="rs-item-content">
                                                <Link to={study.link}>
                                                    <h3 className="title">{study.title}</h3>
                                                    <span>{study.subtitle}</span>
                                                </Link>
                                            </div>
                                            <div className="rs-item-link">
                                                <Link to={study.link}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 18 18" fill="none">
                                                        <path d="M15.0052 5.11205L2.11729 18L0 15.8827L12.8864 2.99476H1.52883V0H18V16.4712H15.0052V5.11205Z" fill="#F26F20"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home3CaseStudy;