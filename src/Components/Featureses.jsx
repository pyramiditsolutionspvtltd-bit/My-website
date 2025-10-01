import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Featureses = ({ service_icon1, service_icon2, service_icon3, service_icon4, service_icon5 }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const bannerData = [
        { title: 'Cyber Security', image: service_icon1, linkUrl: '#' },
        { title: 'Wireless Solutions', image: service_icon2, linkUrl: '' },
        { title: 'IP Surveillance', image: service_icon3, linkUrl: '#' },
        { title: 'UTP Cabling', image: service_icon4, linkUrl: '#' },
        { title: 'Unified Cabling', image: service_icon5, linkUrl: '#' },
    ]

    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="rs-service-2 pt-90 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-service-2__grid">
                            {
                                bannerData && bannerData.map((data, index) => {
                                    return (
                                        <div 
                                            key={index} 
                                            className="rs-service-2__item"
                                            onClick={() => handleItemClick(index)}
                                            style={{ 
                                                cursor: 'pointer',
                                                backgroundColor: activeIndex === index ? '#f24c1a' : 'transparent',
                                                color: activeIndex === index ? '#fff' : 'inherit',
                                                borderRadius: '8px',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            <div className="rs-service-2__icon">
                                                <img 
                                                    src={data.image} 
                                                    alt="" 
                                                    style={{
                                                        filter: activeIndex === index ? 'brightness(0) invert(1)' : 'none'
                                                    }}
                                                />
                                            </div>
                                            <h5 className="title">
                                                <Link 
                                                    to={data.linkUrl}
                                                    style={{
                                                        color: activeIndex === index ? '#fff' : 'inherit'
                                                    }}
                                                >
                                                    {data.title}
                                                </Link>
                                            </h5>
                                        </div>
                                    )
                                })
                            }
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
};

export default Featureses;