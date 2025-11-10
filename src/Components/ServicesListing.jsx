import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAllServices, getServicesByCategory } from '../data/servicesData';

// Function to get appropriate icon for each service
const getServiceIcon = (serviceId) => {
    const iconMap = {
        'networking-internetworking': 'ri-router-line',
        'security-services-av-va': 'ri-shield-check-line',
        'cyber-security': 'ri-shield-keyhole-line',
        'audio-video-integration': 'ri-speaker-line',
        'wireless-solutions': 'ri-wifi-line',
        'ip-surveillance': 'ri-camera-line',
        'unified-communications': 'ri-phone-line',
        'vulnerability-assessment-antivirus': 'ri-bug-line',
        'ftth-fiber-to-home': 'ri-speed-line',
        'structured-cabling': 'ri-building-line',
        'utp-cabling': 'ri-links-line',
        'unified-computing': 'ri-server-line',
        'internet-of-things-iot': 'ri-sensor-line',
        'ip-surveillance-cloud': 'ri-cloud-line',
        'it-itil-consulting': 'ri-user-star-line',
        'it-risk-assessment': 'ri-error-warning-line',
        'it-assessment': 'ri-search-eye-line',
        'lan-network': 'ri-computer-line',
        'wlan-network': 'ri-wifi-line',
        'wan-network': 'ri-global-line',
        'data-center-network': 'ri-database-2-line'
    };
    
    return iconMap[serviceId] || 'ri-tools-line';
};

const ServicesListing = ({ 
    category = null, 
    showAllServices = true, 
    maxServices = null,
    layoutType = 'grid', // 'grid' or 'list'
    showDescription = true,
    showCategory = true 
}) => {
    // Get services based on category filter
    const services = category ? getServicesByCategory(category) : getAllServices();
    
    // Limit services if maxServices is specified
    const displayServices = maxServices ? services.slice(0, maxServices) : services;

    if (layoutType === 'list') {
        return (
            <div className="services-listing-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="services-list">
                                {displayServices.map((service) => (
                                    <div key={service.id} className="service-list-item mb-4">
                                        <div className="row align-items-center">
                                            <div className="col-md-8">
                                                <div className="service-content">
                                                    {showCategory && (
                                                        <span className="service-category badge bg-primary mb-2">
                                                            {service.category}
                                                        </span>
                                                    )}
                                                    <h4 className="service-title">
                                                        <Link to={`/service/${service.id}`}>
                                                            {service.title}
                                                        </Link>
                                                    </h4>
                                                    {showDescription && (
                                                        <p className="service-description">
                                                            {service.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-md-end">
                                                <Link 
                                                    to={`/service/${service.id}`} 
                                                    className="main-btn"
                                                >
                                                    Learn More <i className="ri-arrow-right-fill"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Grid layout (default)
    return (
        <div className="services-listing-container">
            <div className="container">
                <div className="row">
                    {displayServices.map((service) => (
                        <div key={service.id} className="col-lg-4 col-md-6 mb-4 d-flex">
                            <div className="service-card service-card-hover h-100 w-100 d-flex flex-column" 
                                 style={{
                                     transition: 'all 0.3s ease',
                                     cursor: 'pointer',
                                     border: '1px solid #e0e0e0',
                                     borderRadius: '10px',
                                     boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                                 }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-5px)';
                                     e.currentTarget.style.boxShadow = '0 8px 25px rgba(242, 111, 32, 0.2)';
                                     e.currentTarget.style.backgroundColor = '#fff8f5';
                                     e.currentTarget.style.borderColor = '#F26F20';
                                     
                                     // Change icon color
                                     const icon = e.currentTarget.querySelector('.service-icon i');
                                     if (icon) icon.style.color = '#FF8B40';
                                     
                                     // Change category badge
                                     const badge = e.currentTarget.querySelector('.badge');
                                     if (badge) {
                                         badge.style.backgroundColor = '#FF8B40';
                                         badge.style.transform = 'scale(1.05)';
                                     }
                                     
                                     // Change button
                                     const button = e.currentTarget.querySelector('.btn');
                                     if (button) {
                                         button.style.backgroundColor = '#FF8B40';
                                         button.style.transform = 'scale(1.02)';
                                     }
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                                     e.currentTarget.style.backgroundColor = '#ffffff';
                                     e.currentTarget.style.borderColor = '#e0e0e0';
                                     
                                     // Reset icon color
                                     const icon = e.currentTarget.querySelector('.service-icon i');
                                     if (icon) icon.style.color = '#F26F20';
                                     
                                     // Reset category badge
                                     const badge = e.currentTarget.querySelector('.badge');
                                     if (badge) {
                                         badge.style.backgroundColor = '#F26F20';
                                         badge.style.transform = 'scale(1)';
                                     }
                                     
                                     // Reset button
                                     const button = e.currentTarget.querySelector('.btn');
                                     if (button) {
                                         button.style.backgroundColor = '#F26F20';
                                         button.style.transform = 'scale(1)';
                                     }
                                 }}
                            >
                                <div className="service-card-body flex-grow-1 p-4">
                                    {showCategory && (
                                        <div className="service-category-badge mb-3">
                                            <span className="badge" style={{backgroundColor: '#F26F20', color: 'white'}}>
                                                {service.category}
                                            </span>
                                        </div>
                                    )}
                                    
                                    <div className="service-icon mb-3 text-center">
                                        <i className={`${getServiceIcon(service.id)} fs-1`} style={{color: '#F26F20'}}></i>
                                    </div>
                                    
                                    <h4 className="service-title mb-3 text-center">
                                        <Link to={`/service/${service.id}`} className="text-decoration-none text-dark">
                                            {service.title}
                                        </Link>
                                    </h4>
                                    
                                    {showDescription && (
                                        <p className="service-description mb-4 text-center">
                                            {service.description.length > 120 
                                                ? `${service.description.substring(0, 120)}...` 
                                                : service.description}
                                        </p>
                                    )}
                                    
                                    {service.features && service.features.length > 0 && (
                                        <div className="service-features mb-4">
                                            <ul className="feature-list list-unstyled">
                                                {service.features.slice(0, 3).map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="mb-2 d-flex align-items-start">
                                                        <i className="ri-check-line me-2 mt-1" style={{color: '#F26F20', fontSize: '0.9rem'}}></i>
                                                        <span style={{fontSize: '0.9rem'}}>{feature}</span>
                                                    </li>
                                                ))}
                                                {service.features.length > 3 && (
                                                    <li className="text-muted" style={{fontSize: '0.8rem'}}>
                                                        +{service.features.length - 3} more features
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                
                                <div className="service-card-footer p-4 pt-0 mt-auto">
                                    <Link 
                                        to={`/service/${service.id}`} 
                                        className="btn w-100 text-white"
                                        style={{backgroundColor: '#F26F20', borderColor: '#F26F20'}}
                                    >
                                        Learn More <i className="ri-arrow-right-fill ms-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {showAllServices && maxServices && services.length > maxServices && (
                    <div className="row">
                        <div className="col-12 text-center mt-4">
                            <Link to="/services" className="main-btn btn-outline">
                                View All Services <i className="ri-arrow-right-fill"></i>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

ServicesListing.propTypes = {
    category: PropTypes.string,
    showAllServices: PropTypes.bool,
    maxServices: PropTypes.number,
    layoutType: PropTypes.oneOf(['grid', 'list']),
    showDescription: PropTypes.bool,
    showCategory: PropTypes.bool
};

export default ServicesListing;