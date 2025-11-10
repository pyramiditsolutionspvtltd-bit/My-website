import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Common_Testimonial_Iteam from './Common_Testimonial_Iteam';
import Common_Question from './Common_Question';
import Home1and2Counter from './Home1and2Counter';
import { getServiceById } from '../data/servicesData';
import '../assets/scss/components/_service-details-enhanced.scss';

const ServiceDetails = ({ 
    service_details_thumb_2, 
    counter_icon_1, 
    counter_icon_2, 
    counter_icon_3, 
    counter_icon_4, 
    rating_1, 
    quote_white, 
    testi1, 
    testi2, 
    testi3, 
    testi4, 
    testi5, 
    flag_1, 
    flag_2, 
    flag_3, 
    flag_4, 
    flag_5, 
    mobileItems, 
    mobileLargeItems, 
    smItems, 
    mdItems, 
    items,
    serviceId 
}) => {
    const { id } = useParams();
    const currentServiceId = serviceId || id;
    const serviceData = getServiceById(currentServiceId);

    // Default service data if not found
    const defaultService = {
        title: 'Service Not Found',
        description: 'The requested service could not be found.',
        fullDescription: 'Please check the service ID and try again.',
        quote: 'We apologize for the inconvenience.',
        imageUrl: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80',
        features: [],
        benefits: [],
        technicalSpecs: []
    };

    const service = serviceData || defaultService;

    return (
        <div className="rs-service-details rs-service-details-3 pt-80 pb-95">
            <div className="container">
                <div className="row column-reverse">
                   
                    <div className="col-lg-12">
                        <div className="rs-service-details__content">
                            {/* Service Hero Section */}
                            <div className="service-hero-section mb-40">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="hero-content">
                                            <div className="service-category-badge mb-3">
                                                <span className="badge" style={{backgroundColor: '#F26F20', color: 'white'}}>{service.category}</span>
                                            </div>
                                            <h1 className="hero-title mb-4">{service.title}</h1>
                                            <p className="hero-description lead">{service.description}</p>
                                            
                                            {/* Quick Action Buttons */}
                                            <div className="hero-actions mt-4">
                                                <Link to="/contact" className="btn btn-lg me-3" style={{backgroundColor: '#F26F20', borderColor: '#F26F20', color: 'white'}}>
                                                    Get Quote <i className="ri-arrow-right-line"></i>
                                                </Link>
                                                <Link to="/appointment" className="btn btn-outline-primary btn-lg" style={{borderColor: '#F26F20', color: '#F26F20'}}>
                                                    Schedule Consultation <i className="ri-calendar-line"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="hero-image">
                                            <img 
                                                src={service.imageUrl || service_details_thumb_2} 
                                                alt={service.title}
                                                className="img-fluid rounded shadow-lg"
                                                style={{width: '100%', height: '400px', objectFit: 'cover'}}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rs-content">
                                {/* Service Title & Description */}
                                <h3 className="title">{service.title}</h3>
                                <p>{service.fullDescription}</p>

                                {/* Quote Section */}
                                <div className="quote-text">
                                    <p>&ldquo;{service.quote}&rdquo;</p>
                                </div>

                                {/* Features, Benefits, and Technical Specs - Cards in Single Row */}
                                <div className="service-cards-section mt-40">
                                    <div className="row">
                                        {/* Key Features Card */}
                                        {service.features && service.features.length > 0 && (
                                            <div className="col-lg-4 col-md-4 mb-4">
                                                <div className="service-card h-100 p-4 border rounded shadow-sm bg-white">
                                                    <div className="card-header mb-3">
                                                        <div className="card-icon mb-2">
                                                            <i className="ri-check-double-line fs-3" style={{color: '#F26F20'}}></i>
                                                        </div>
                                                        <h4 className="card-title">Key Features</h4>
                                                    </div>
                                                    <div className="card-content">
                                                        <ul className="service-list">
                                                            {service.features.map((feature, index) => (
                                                                <li key={index} className="mb-2">
                                                                    <i className="ri-arrow-right-s-line me-2" style={{color: '#F26F20'}}></i>
                                                                    {feature}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Benefits Card */}
                                        {service.benefits && service.benefits.length > 0 && (
                                            <div className="col-lg-4 col-md-4 mb-4">
                                                <div className="service-card h-100 p-4 border rounded shadow-sm bg-white">
                                                    <div className="card-header mb-3">
                                                        <div className="card-icon mb-2">
                                                            <i className="ri-award-line fs-3" style={{color: '#F26F20'}}></i>
                                                        </div>
                                                        <h4 className="card-title">Benefits</h4>
                                                    </div>
                                                    <div className="card-content">
                                                        <ul className="service-list">
                                                            {service.benefits.map((benefit, index) => (
                                                                <li key={index} className="mb-2">
                                                                    <i className="ri-arrow-right-s-line me-2" style={{color: '#F26F20'}}></i>
                                                                    {benefit}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Technical Specifications Card */}
                                        {service.technicalSpecs && service.technicalSpecs.length > 0 && (
                                            <div className="col-lg-4 col-md-4 mb-4">
                                                <div className="service-card h-100 p-4 border rounded shadow-sm bg-white">
                                                    <div className="card-header mb-3">
                                                        <div className="card-icon mb-2">
                                                            <i className="ri-settings-3-line fs-3" style={{color: '#F26F20'}}></i>
                                                        </div>
                                                        <h4 className="card-title">Technical Specifications</h4>
                                                    </div>
                                                    <div className="card-content">
                                                        <ul className="service-list">
                                                            {service.technicalSpecs.map((spec, index) => (
                                                                <li key={index} className="mb-2">
                                                                    <i className="ri-arrow-right-s-line me-2" style={{color: '#F26F20'}}></i>
                                                                    {spec}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Statistics Counter */}
                                {/* <Home1and2Counter
                                    counter_icon_1={counter_icon_1}
                                    counter_icon_2={counter_icon_2}
                                    counter_icon_3={counter_icon_3}
                                    counter_icon_4={counter_icon_4}
                                    passClass={'service-details-3'}
                                /> */}

                                {/* Testimonials */}
                                {/* <div className="rs-carousel owl-carousel nav-style1 mt-15" data-loop="true" data-items="2" data-margin="30" data-autoplay="true" data-hoverpause="false" data-autoplay-timeout="5000" data-smart-speed="800" data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device="1" data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2="1" data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device="1" data-lg-device="2" data-md-device-nav="false" data-md-device-dots="false" data-doteach="false"> */}
                                    {/* <Common_Testimonial_Iteam
                                        rating_1={rating_1}
                                        quote_white={quote_white}
                                        testi1={testi1}
                                        flag_1={flag_1}
                                        testi2={testi2}
                                        flag_2={flag_2}
                                        testi3={testi3}
                                        flag_3={flag_3}
                                        testi4={testi4}
                                        flag_4={flag_4}
                                        testi5={testi5}
                                        flag_5={flag_5}
                                        previewPhone={mobileItems}
                                        previewPhoneExt={mobileLargeItems}
                                        previewSM={smItems}
                                        previewMd={mdItems}
                                        preview={items}
                                    /> */}
                               {/*  </div> */}

                                {/* FAQ Section */}
                               {/*  <h3 className="title pt-40 pb-15">Frequently Asked Questions</h3> */}
                                {/* <Common_Question /> */}

                                {/* Call to Action */}
{/*                                 <div className="service-cta mt-50">
                                    <div className="cta-content text-center">
                                        <h4>Ready to Get Started?</h4>
                                        <p>Contact our team of experts to discuss your {service.title.toLowerCase()} requirements.</p>
                                        <div className="cta-buttons mt-30">
                                            <Link to="/contact" className="main-btn me-3">
                                                Get Quote <i className="ri-arrow-right-fill"></i>
                                            </Link>
                                            <Link to="/appointment" className="main-btn btn-outline">
                                                Schedule Consultation <i className="ri-calendar-line"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ServiceDetails.propTypes = {
    service_details_thumb_2: PropTypes.string,
    counter_icon_1: PropTypes.string,
    counter_icon_2: PropTypes.string,
    counter_icon_3: PropTypes.string,
    counter_icon_4: PropTypes.string,
    rating_1: PropTypes.string,
    quote_white: PropTypes.string,
    testi1: PropTypes.string,
    testi2: PropTypes.string,
    testi3: PropTypes.string,
    testi4: PropTypes.string,
    testi5: PropTypes.string,
    flag_1: PropTypes.string,
    flag_2: PropTypes.string,
    flag_3: PropTypes.string,
    flag_4: PropTypes.string,
    flag_5: PropTypes.string,
    mobileItems: PropTypes.number,
    mobileLargeItems: PropTypes.number,
    smItems: PropTypes.number,
    mdItems: PropTypes.number,
    items: PropTypes.number,
    serviceId: PropTypes.string
};

export default ServiceDetails;