import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Featureses = ({ service_icon1, service_icon2, service_icon3, service_icon4, service_icon5, service_icon6, service_icon7, service_icon8 }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const bannerData = [
        { title: 'Cyber Security', image: service_icon1, linkUrl: '/service/cyber-security' },
        { title: 'Network Solutions', image: service_icon2, linkUrl: '/service/wireless-solutions' },
        { title: 'IP Surveillance', image: service_icon3, linkUrl: '/service/ip-surveillance-cloud' },
        { title: 'Structured Cabling', image: service_icon4, linkUrl: '/service/structured-cabling' },
        { title: 'Unified Computing', image: service_icon5, linkUrl: '/service/unified-computing' },
        { title: 'Unified Collaboration', image: service_icon6, linkUrl: '/service/unified-collaboration' },
        { title: 'GPON', image: service_icon7, linkUrl: '/service/gpon-network' },
        { title: 'Cloud Computing', image: service_icon8, linkUrl: '/service/cloud-computing-service' },
    ]

    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
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
                    onClick={() => handleItemClick(actualIndex)}
                    style={{ 
                        cursor: 'pointer',
                        backgroundColor: activeIndex === actualIndex ? '#f24c1a' : 'transparent',
                        color: activeIndex === actualIndex ? '#fff' : 'inherit',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <div className="rs-service-2__icon">
                        <img 
                            src={data.image} 
                            alt="" 
                            style={{
                                filter: activeIndex === actualIndex ? 'brightness(0) invert(1)' : 'none'
                            }}
                        />
                    </div>
                    <h5 className="title">
                        <Link 
                            to={data.linkUrl}
                            style={{
                                color: activeIndex === actualIndex ? '#fff' : 'inherit'
                            }}
                        >
                            {data.title}
                        </Link>
                    </h5>
                </div>
            );
        });
    };

    return (
        <div className="rs-service-2 pt-90 pb-120">
            <div className="container">
                {/* First Row - 4 cards */}
                <div className="row mb-4">
                    <div className="col-lg-12" style={{ paddingLeft: '10rem' }}>
                        <div className="rs-service-2__grid">
                            {renderCards(firstRow, 0)}
                        </div>
                    </div>
                </div>
                
                {/* Second Row - 4 cards */}
                <div className="row">
                    <div className="col-lg-12" style={{ paddingLeft: '10rem' }}>
                        <div className="rs-service-2__grid">
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