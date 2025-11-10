import Navbar from '../../layout/Navbar';
import Common_Banner from '../../Components/Common_Banner';
import ServicesListing from '../../Components/ServicesListing';
import Footer from '../../layout/Footer';
import { Link } from 'react-router-dom';

// Import footer assets
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';

const ServicesDemoPage = () => {
    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
                firstLvlMenu='services'
            />
            <Common_Banner
                pageName={'Services Demo - Reusable Components'}
            />
            
            {/* Demo Introduction */}
            <div className="rs-services-demo-intro pt-120 pb-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="demo-intro-content text-center">
                                <h2 className="title mb-4">Reusable Service Components Demo</h2>
                                <p className="description mb-5">
                                    This page demonstrates the reusable service components with dummy data. 
                                    The system includes a centralized data structure and flexible components 
                                    that can be used throughout the application.
                                </p>
                                
                                <div className="demo-links mb-5">
                                    <h5 className="mb-3">Try These Service Pages:</h5>
                                    <div className="row justify-content-center">
                                        <div className="col-md-10">
                                            <div className="demo-service-links">
                                                <Link to="/services" className="btn btn-outline-primary me-2 mb-2">
                                                    All Services
                                                </Link>
                                                <Link to="/service/mobile-app-development" className="btn btn-outline-primary me-2 mb-2">
                                                    Mobile App Development
                                                </Link>
                                                <Link to="/services" className="btn btn-outline-primary me-2 mb-2">
                                                    Services Overview
                                                </Link>
                                                <Link to="/service/artificial-intelligence" className="btn btn-outline-primary me-2 mb-2">
                                                    Artificial Intelligence
                                                </Link>
                                                <Link to="/service/cloud-migration" className="btn btn-outline-primary me-2 mb-2">
                                                    Cloud Migration
                                                </Link>
                                                <Link to="/service/cybersecurity-services" className="btn btn-outline-primary me-2 mb-2">
                                                    Cybersecurity Services
                                                </Link>
                                                <Link to="/service/it-consulting" className="btn btn-outline-primary me-2 mb-2">
                                                    IT Consulting
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="rs-demo-features pb-60">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <h3 className="section-title">Component Features</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="feature-box text-center p-4">
                                <div className="feature-icon mb-3">
                                    <i className="ri-database-2-line fs-1 text-primary"></i>
                                </div>
                                <h5>Centralized Data</h5>
                                <p>All service data is managed in a centralized location for easy maintenance and updates.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="feature-box text-center p-4">
                                <div className="feature-icon mb-3">
                                    <i className="ri-refresh-line fs-1 text-primary"></i>
                                </div>
                                <h5>Reusable Components</h5>
                                <p>Service components are designed to be reusable across different pages and contexts.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="feature-box text-center p-4">
                                <div className="feature-icon mb-3">
                                    <i className="ri-layout-grid-line fs-1 text-primary"></i>
                                </div>
                                <h5>Flexible Layout</h5>
                                <p>Components support different layout options including grid and list views.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Grid Demo */}
            <div className="rs-services-grid-demo pb-60">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <h3 className="section-title">Grid Layout Demo</h3>
                            <p>This shows how services can be displayed in a responsive grid layout</p>
                        </div>
                    </div>
                </div>
                
                <ServicesListing 
                    showAllServices={false}
                    layoutType="grid"
                    showDescription={true}
                    showCategory={true}
                    maxServices={6}
                />
            </div>

            {/* Services List Demo */}
            <div className="rs-services-list-demo pb-60" style={{backgroundColor: '#f8f9fa'}}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <h3 className="section-title pt-5">List Layout Demo</h3>
                            <p>The same data can be displayed in a list format for different use cases</p>
                        </div>
                    </div>
                </div>
                
                <ServicesListing 
                    showAllServices={false}
                    layoutType="list"
                    showDescription={true}
                    showCategory={true}
                    maxServices={4}
                />
            </div>

            {/* Category Filter Demo */}
            <div className="rs-services-category-demo pb-120">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <h3 className="section-title">Category Filter Demo</h3>
                            <p>Services can be filtered by category - showing only Digital Solutions below</p>
                        </div>
                    </div>
                </div>
                
                <ServicesListing 
                    category="Digital Solutions"
                    showAllServices={false}
                    layoutType="grid"
                    showDescription={true}
                    showCategory={false}
                    maxServices={4}
                />
            </div>

            <Footer
                info_1={info_1}
                info_2={info_2}
                info_3={info_3}
            />
        </>
    );
};

export default ServicesDemoPage;