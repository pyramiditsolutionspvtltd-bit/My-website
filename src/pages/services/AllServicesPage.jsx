import Navbar from '../../layout/Navbar';
import Common_Banner from '../../Components/Common_Banner';
import ServicesListing from '../../Components/ServicesListing';
import Footer from '../../layout/Footer';

// Import footer assets
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';

const AllServicesPage = () => {
    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
                firstLvlMenu='services'
            />
            <Common_Banner
                pageName={'Our Services'}
            />
            
            {/* Services Intro Section */}
            <div className="rs-services-intro pt-120 pb-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="section-title">
                                <h2 className="title">Complete IT Solutions for Your Business</h2>
                                <p className="description">
                                    We provide comprehensive IT services and solutions to help your business 
                                    thrive in the digital age. From networking and security to cloud computing 
                                    and professional services, we have the expertise to meet all your technology needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Listing */}
            <div className="rs-services-listing pb-120">
                <ServicesListing 
                    showAllServices={false}
                    layoutType="grid"
                    showDescription={true}
                    showCategory={true}
                />
            </div>

            {/* Call to Action Section */}
            <div className="rs-services-cta pt-80 pb-80" style={{backgroundColor: '#f8f9fa'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="cta-content">
                                <h3>Need a Custom Solution?</h3>
                                <p className="mb-0">
                                    Our expert team can design and implement tailored IT solutions 
                                    that perfectly match your business requirements and objectives.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <div className="cta-buttons">
                                <a href="/contact" className="main-btn me-3">
                                    Get Custom Quote <i className="ri-arrow-right-fill"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer
                info_1={info_1}
                info_2={info_2}
                info_3={info_3}
            />
        </>
    );
};

export default AllServicesPage;