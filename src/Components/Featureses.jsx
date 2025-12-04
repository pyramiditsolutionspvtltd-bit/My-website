import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Featureses = ({ service_icon1, service_icon2, service_icon3, service_icon4, service_icon5, service_icon6, service_icon7, service_icon8 }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const bannerData = [
        { title: 'Cyber Security', image: service_icon1, linkUrl: '/service/cyber-security' },
        { title: 'Network Solutions', image: service_icon2, linkUrl: '/service/wireless-solutions' },
        { title: 'Unified Collaboration', image: service_icon6, linkUrl: '/service/unified-collaboration' },
        { title: 'Unified Computing', image: service_icon5, linkUrl: '/service/unified-computing' },
        { title: 'Cloud Computing', image: service_icon8, linkUrl: '/service/cloud-computing-service' },
        { title: 'IP Surveillance', image: service_icon3, linkUrl: '/service/ip-surveillance-cloud' },       
        { title: 'GPON', image: service_icon7, linkUrl: '/service/gpon-network' },
        { title: 'Structured Cabling', image: service_icon4, linkUrl: '/service/structured-cabling' },

    ]

    const handleItemClick = (index, linkUrl) => {
        setActiveIndex(index);
        navigate(linkUrl);
    };
    // Split the bannerData into two groups of 4
    const firstRow = bannerData.slice(0, 4);
    const secondRow = bannerData.slice(4, 8);

    const renderCards = (cardsData, rowOffset = 0) => {
        return cardsData.map((data, index) => {
            const actualIndex = index + rowOffset;
            return (
                <div 
                    key={actualIndex} 
                    className="rs-service-2__item"
                    onClick={() => handleItemClick(actualIndex, data.linkUrl)}
                    style={{ 
                        cursor: 'pointer',
                        backgroundColor: activeIndex === actualIndex ? '#f24c1a' : 'transparent',
                        color: activeIndex === actualIndex ? '#fff' : 'inherit',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        minHeight: isMobile ? '150px' : '140px',
                        padding: isMobile ? '25px 20px' : '25px 30px',
                        margin: isMobile ? '8px 0' : '30px 0 0 0',
                        boxShadow: isMobile ? '0px 4px 20px rgba(0, 0, 0, 0.15)' : '0px -4px 34px 0px rgba(0, 29.999999999999975, 76, 0.06)'
                    }}
                >
                    <div className="rs-service-2__icon">
                        <img 
                            src={data.image} 
                            alt="" 
                            style={{
                                filter: activeIndex === actualIndex ? 'brightness(0) invert(1)' : 'none',
                                width: isMobile ? '55px' : '50px',
                                height: 'auto'
                            }}
                        />
                    </div>
                    <h5 
                        className="title"
                        style={{
                            fontSize: isMobile ? '16px' : '18px',
                            lineHeight: isMobile ? '22px' : '24px',
                            marginTop: isMobile ? '15px' : '15px',
                            marginBottom: isMobile ? '8px' : '5px',
                            padding: isMobile ? '0 8px' : '0 8px',
                            fontWeight: '600',
                            color: activeIndex === actualIndex ? '#fff' : 'inherit'
                        }}
                    >
                        {data.title}
                    </h5>
                </div>
            );
        });
    };

    return (
        <div className={`rs-service-2 ${isMobile ? 'pt-30 pb-50' : 'pt-90 pb-120'}`}>
            <div className={isMobile ? 'container-fluid px-3' : 'container'}>
                {/* First Row - 4 cards */}
                <div className={`row ${isMobile ? 'mb-4' : 'mb-5'}`}>
                    <div 
                        className="col-lg-12" 
                        style={{ 
                            paddingLeft: isMobile ? '0.5rem' : '10rem',
                            paddingRight: isMobile ? '0.5rem' : '1rem',
                            paddingTop: isMobile ? '0.5rem' : '0',
                            paddingBottom: isMobile ? '0.5rem' : '0'
                        }}
                    >
                        <div 
                            className="rs-service-2__grid"
                            style={{
                                gap: isMobile ? '15px' : '15px'
                            }}
                        >
                            {renderCards(firstRow, 0)}
                        </div>
                    </div>
                </div>
                
                {/* Second Row - 4 cards */}
                <div className="row">
                    <div 
                        className="col-lg-12" 
                        style={{ 
                            paddingLeft: isMobile ? '0.5rem' : '10rem',
                            paddingRight: isMobile ? '0.5rem' : '1rem',
                            paddingTop: isMobile ? '0.5rem' : '0',
                            paddingBottom: isMobile ? '0.5rem' : '0'
                        }}
                    >
                        <div 
                            className="rs-service-2__grid"
                            style={{
                                gap: isMobile ? '15px' : '15px'
                            }}
                        >
                            {renderCards(secondRow, 4)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Featureses.propTypes = {
    service_icon1: PropTypes.string,
    service_icon2: PropTypes.string,
    service_icon3: PropTypes.string,
    service_icon4: PropTypes.string,
    service_icon5: PropTypes.string,
    service_icon6: PropTypes.string,
    service_icon7: PropTypes.string,
    service_icon8: PropTypes.string,
};

export default Featureses;