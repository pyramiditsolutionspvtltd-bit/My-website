import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


const OurTeam = ({ heart_pulse_orange2, heart_pulse_orange, team_img_5, team_img_1, team_img_2, team_img_4, team_img_7, team_img_6, passClass, heart_pulse_rate_white, t_logo, team_item1, team_item2, team_item3, team_item4,previewPhone,previewPhoneExt,previewSM,previewMd,preview,showPagination }) => {
    const sliderRef = useRef(null);

    const persons = [
        {
            image: team_img_5 || team_item4,
            name: 'JOHN BRADSHAW',
            designation: 'Senior Advisor'
        },
        {
            image: team_img_1 || team_item1,
            name: 'NICK POWEL',
            designation: 'Leader'
        },
        {
            image: team_img_2 || team_item2,
            name: 'ELIZABETH LAYlLA',
            designation: 'Designer'
        },
        {
            image: team_img_4 || team_item3,
            name: 'PAUL WALKER',
            designation: 'Director'
        },
        {
            image: team_img_2 || team_item4,
            name: 'STEPHEN LARRY',
            designation: 'Co, Founder'
        },
        {
            image: team_img_5 || team_item1,
            name: 'JOHN BRADSHAW',
            designation: 'Senior Advisor'
        },
        {
            image: team_img_7 || team_item2,
            name: 'PATRICIA GABLE',
            designation: 'Marketing manager'
        },
        {
            image: team_img_6 || team_item3,
            name: 'AMBER AUSTIN',
            designation: 'Operation Manager'
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
        <div className={`${passClass ? passClass : 'rs-team-grid mt-110 pb-120'} ${ passClass ? 'pt-120 pb-120' : ''} `}>
            <div className={`${passClass === 'rs-team' ? 'container rs-team__slider-box' : "container"}`}>
                <div className="row align-items-center">
                    <div className={`${passClass ? "col-lg-12" : "col-lg-6"}`}>
                        {
                            passClass ?
                                <>
                                    {
                                        passClass === 'rs-team-3' &&
                                        <div className="section-title-2">
                                            <span><img src={t_logo} alt="" /> Our Staff</span>
                                            <h2 className="title split-in-fade">Meet our expert team members</h2>
                                        </div>
                                    }
                                    {
                                        passClass === 'rs-team' &&
                                        <div className="rs-section-title">
                                            <div className="top-sub-heading">
                                                <img src={heart_pulse_rate_white} alt="icon" />
                                                <span>Team Member</span>
                                                <img src={heart_pulse_rate_white} alt="icon" />
                                            </div>
                                            <h2 className="title split-in-fade">Our experienced experts for your support</h2>
                                        </div>
                                    }
                                </> :
                                <div className="rs-section-title black">
                                    <div className="top-sub-heading">
                                        <img src={heart_pulse_orange2} alt="icon" />
                                        <span>Profesional People</span>
                                        <img src={heart_pulse_orange} alt="icon" />
                                    </div>
                                    <h2 className="title split-in-fade">Meet our expert team member</h2>
                                </div>
                        }

                    </div>
                    {
                        !passClass &&
                        <div className="col-lg-6">
                            <div className="rs-team-text">
                                <p> Bring to the table win-win survival strategies to ensure proactive domination At the end of the day.</p>
                            </div>
                        </div>
                    }
                </div>
                {
                    passClass  ?
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={showPagination ? { clickable: true } : false}
                            modules={[Pagination,Autoplay]}
                            freeMode={true}
                            loop={true}
                            navigation={{
                                prevEl: '.prev',
                                nextEl: '.next',
                            }}
                            ref={sliderRef}
                            breakpoints={{
                                0: {
                                    slidesPerView: previewPhone || 1,
                                    spaceBetween: 10,
                                },
                                576: {
                                    slidesPerView: previewPhoneExt || 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: previewSM || 2,
                                    spaceBetween: 14,
                                },
                                992: {
                                    slidesPerView: previewMd || 2,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: preview || 4,
                                    spaceBetween: 20,
                                },
                            }}
                        >

                            {/* Change layout by class name */}

                            {persons && persons.map((person, index) => (
                                <SwiperSlide className={`${passClass === 'rs-team' ? 'rs-team__slider-box' : ""} rs-carousel owl-carousel `} key={index}
                                >
                                    <div className={`${passClass === 'rs-team' ? 'rs-team__single-item' : 'rs-team-3__item'} mt-30`}>
                                        <div className='rs-thumb-wrap'>
                                            <div className="rs-thumb">
                                                <img src={person.image} alt="" />
                                                <div className="rs-social">
                                                    { passClass !=='rs-team' &&
                                                        <div className="share-icon">
                                                        <i className="ri-share-line"></i>
                                                    </div>}
                                                    <ul className='rs-team-social'>
                                                        <li><Link to="#"><i className="ri-facebook-line"></i></Link></li>
                                                        <li><Link to="#"><i className="ri-twitter-x-line"></i></Link></li>
                                                        <li><Link to="#"><i className="ri-linkedin-line"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`${passClass === 'rs-team' ? 'content' : "rs-content"}`}>
                                            <Link to="/team-details">{person.name}</Link>
                                            <span>{person.designation}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>


                        :
                        // for grid layout
                        <div className="row">
                            {persons && persons.map((person, index) => (
                                <div className="col-lg-3 col-sm-6" key={index}>
                                    <div className="rs-team-3__item mt-30">
                                        <div className="rs-thumb">
                                            <img src={person.image} alt="" />
                                            <div className="rs-social">
                                                <div className="share-icon">
                                                    <i className="ri-share-line"></i>
                                                </div>
                                                <ul>
                                                    <li><Link to="#"><i className="ri-facebook-line"></i></Link></li>
                                                    <li><Link to="#"><i className="ri-twitter-x-line"></i></Link></li>
                                                    <li><Link to="#"><i className="ri-linkedin-line"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={"rs-content"}>
                                            <Link to="/team-details">{person.name}</Link>
                                            <span>{person.designation}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                }
                {
                    passClass === 'rs-team' &&
                    <div className='owl-nav'>
                        <div className="owl-prev" onClick={handlePrev}><i className="ri-arrow-left-fill"></i> <span>PREV</span></div>
                        <div className="owl-next" onClick={handleNext}><span>NEXT</span> <i className="ri-arrow-right-fill"></i></div>
                    </div>
                }
            </div>
        </div>
    );
};

export default OurTeam;
