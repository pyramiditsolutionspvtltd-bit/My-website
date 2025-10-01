import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import PropTypes from 'prop-types';

const Project = ({ heart_pulse_rate_orange_2, heart_pulse_rate_orange, project_1, project_2, project_3, project_4, project_5, port_cube, addclass,previewPhone,previewPhoneExt,previewSM,previewMd,preview }) => {
    const projects = [
        { image: project_1, name: 'Analys & Backup Blockchain' },
        { image: project_2, name: 'Analys & Backup Blockchain' },
        { image: project_3, name: 'Analys & Backup Blockchain' },
        { image: project_4, name: 'Analys & Backup Blockchain' },
        { image: project_5, name: 'Analys & Backup Blockchain' },
    ];

    return (
   <div id="rs-portfolios" className={`rs-project ${addclass ? addclass : 'pb-200'}`} style={{display: 'none'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-top-line mb-110"></div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="rs-section-title black">
                            <div className="top-sub-heading">
                                <img src={heart_pulse_rate_orange_2} alt="icon" />
                                <span>Our Projects</span>
                                <img src={heart_pulse_rate_orange} alt="icon" />
                            </div>
                            <h2 className="title split-in-fade">See we have solution done IT projects</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-project__btn">
                            <Link className="main-btn" to="/our-projects">View All Services <i className="ri-arrow-right-fill"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper
                            className="rs-carousel owl-carousel rs-project__slider mt-30"
                            spaceBetween={30}
                            slidesPerView={preview || 3}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
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
                                    slidesPerView: preview || 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {
                                projects.map((p, i) => (
                                    <SwiperSlide key={i + 1}>

                                        <div className="rs-project__items">
                                            <div className="wrapping">
                                                <img src={p.image} alt="" />
                                                <div className="rs-project__content">
                                                    <ul>
                                                        <li><Link to="#">Consultation</Link></li>
                                                        <li><Link to="#">Design</Link></li>
                                                        <li><Link to="#">Strategy</Link></li>
                                                    </ul>
                                                    <h3 className="title"><Link to="/project-details">{p.name}</Link></h3>
                                                    <div className="rs-link">
                                                        <Link to="/project-details">View Details <i className="ri-arrow-right-fill" ></i></Link>    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="rs-shape">
                <img src={port_cube} alt="" />
            </div>
        </div>
    );
};

Project.propTypes = {
    heart_pulse_rate_orange_2: PropTypes.string,
    heart_pulse_rate_orange: PropTypes.string,
    project_1: PropTypes.string,
    project_2: PropTypes.string,
    project_3: PropTypes.string,
    project_4: PropTypes.string,
    project_5: PropTypes.string,
    port_cube: PropTypes.string,
    addclass: PropTypes.string,
    previewPhone: PropTypes.number,
    previewPhoneExt: PropTypes.number,
    previewSM: PropTypes.number,
    previewMd: PropTypes.number,
    preview: PropTypes.number,
};

export default Project;