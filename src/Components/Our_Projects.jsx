import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Our_Projects = ({ portfolio_item_1, portfolio_item_2, portfolio_item_3, portfolio_item_4, portfolio_item_5, passClass,passClassContainer,previewPhone,previewPhoneExt,previewSM,previewMd,preview }) => {
    const projectsData = [
        {
            image: portfolio_item_1,
            name: 'Creative Agency',
            category: 'Branding'
        },
        {
            image: portfolio_item_2,
            name: 'Web Development',
            category: 'Design'
        },
        {
            image: portfolio_item_3,
            name: 'Infrastructure Upgrade',
            category: 'Development'
        },
        {
            image: portfolio_item_4,
            name: 'Data Visualization',
            category: 'Data'
        },
        {
            image: portfolio_item_5,
            name: 'Data Visualization',
            category: 'Data'
        },
        {
            image: portfolio_item_2,
            name: 'Web Development',
            category: 'Design'
        },
        {
            image: portfolio_item_3,
            name: 'Infrastructure Upgrade',
            category: 'Development'
        },
        {
            image: portfolio_item_4,
            name: 'Data Visualization',
            category: 'Data'
        },
        {
            image: portfolio_item_5,
            name: 'Data Visualization',
            category: 'Data'
        },
    ];

    return (
        <div id="rs-portfolios" className={`${passClassContainer ? passClassContainer : "rs-project-3 rs-project-grid pt-115" }`}>
            <div className="rs-project-3__slider">
                <div className={`${passClass ? passClass : "container"}`}>
                    {
                        passClass ?
                            <div className="row">
                                <div className="col-lg-12">
                                    <Swiper
                                        spaceBetween={0}
                                        slidesPerView={preview || 4}
                                        autoplay={{
                                            delay: 3500,
                                            disableOnInteraction: false,
                                        }}

                                        pagination={{
                                            clickable: true,
                                        }}

                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}

                                        breakpoints={{
                                            0: {
                                                slidesPerView: previewPhone || 1,
                                                spaceBetween: 0,
                                            },
                                            576: {
                                                slidesPerView: previewPhoneExt || 1,
                                                spaceBetween: 0,
                                            },
                                            768: {
                                                slidesPerView: previewSM || 2,
                                                spaceBetween: 0,
                                            },
                                            992: {
                                                slidesPerView: previewMd || 3,
                                                spaceBetween: 0,
                                            },
                                            1200: {
                                                slidesPerView: preview || 4,
                                                spaceBetween: 0,
                                            },
                                        }}
                                        
                                    >

                                        {
                                            projectsData && projectsData.map((project, index) => {
                                                return (
                                                    <SwiperSlide key={index} className="rs-project-3__item">
                                                        <div className="rs-thumb">
                                                            <img src={project.image} alt="" />
                                                        </div>
                                                        <div className="rs-project-overlay">
                                                            <div className="rs-project-content">
                                                                <div className="rs-title">
                                                                    <Link to="/project-details">{project.name}</Link>
                                                                </div>
                                                                <div className="rs-category">
                                                                    <span><i className="ri-price-tag-3-line"></i><Link to="#">{project.category}</Link></span>
                                                                </div>
                                                                <div className="rs-text">
                                                                    <p>Completely synergize resource taxing relationships via premier niche markets…</p>
                                                                </div>
                                                            </div>
                                                            <div className="rs-link">
                                                                <Link to="/project-details"><i className="ri-arrow-right-up-line"></i></Link>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                );
                                            })
                                        }

                                    </Swiper>

                                </div>
                            </div> :

                            <div className="row">
                                {projectsData && projectsData.map((project, index) => (
                                    <div className="col-lg-4" key={index}>
                                        <div className="rs-project-3__item">
                                            <div className="rs-thumb">
                                                <img src={project.image} alt={project.name} />
                                            </div>
                                            <div className="rs-project-overlay">
                                                <div className="rs-project-content">
                                                    <div className="rs-title">
                                                        <Link to="project-details.html">{project.name}</Link>
                                                    </div>
                                                    <div className="rs-category">
                                                        <span><i className="ri-price-tag-3-line"></i><Link to="#">{project.category}</Link></span>
                                                    </div>
                                                    <div className="rs-text">
                                                        <p>Completely synergize resource taxing relationships via premier niche markets…</p>
                                                    </div>
                                                </div>
                                                <div className="rs-link">
                                                    <Link to="project-details.html"><i className="ri-arrow-right-up-line"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

Our_Projects.propTypes = {
    portfolio_item_1: PropTypes.string,
    portfolio_item_2: PropTypes.string,
    portfolio_item_3: PropTypes.string,
    portfolio_item_4: PropTypes.string,
    portfolio_item_5: PropTypes.string,
    passClass: PropTypes.string,
    passClassContainer: PropTypes.string,
    previewPhone: PropTypes.string,
    previewPhoneExt: PropTypes.string,
    previewSM: PropTypes.string,
    previewMd: PropTypes.string,
    preview: PropTypes.string
};

export default Our_Projects;
