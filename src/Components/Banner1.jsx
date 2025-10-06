import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import pyramitVideo from '../assets/Video_Generation_For_Pyramid_IT .mp4';

const Banner1 = ({heart_pulse_orange2, heart_pulse_orange}) => {
    return (
        <div className="rs-banner-2" style={{
            position: 'relative', 
            overflow: 'hidden', 
            minHeight: '100vh',
            backgroundImage: 'none !important',
            background: 'transparent',
            padding: '300px 0 0px'
        }}>
            {/* Local Video Background */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100vw',
                height: '100vh',
                transform: 'translate(-50%, -50%)',
                zIndex: -1,
                pointerEvents: 'none',
            }}>
                <video
                    width="100%"
                    height="100%"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                >
                    <source src={pyramitVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            
            {/* Dark overlay for better text readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 0
            }}></div>

            {/* 20 Years Excellence Animated Logo */}
            <div 
                className="excellence-badge excellence-badge-interactive" 
                style={{
                    position: 'absolute',
                    top: '150px',
                    right: '100px',
                    zIndex: 2,
                    animation: 'excellenceFloat 3s ease-in-out infinite, excellenceGlow 2s ease-in-out infinite alternate',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.animation = 'excellenceFloatHover 0.8s ease-in-out infinite, excellenceGlowIntense 1s ease-in-out infinite alternate';
                    e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.animation = 'excellenceFloat 3s ease-in-out infinite, excellenceGlow 2s ease-in-out infinite alternate';
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                <img 
                    src="/src/assets/images/20-years-excellence.png" 
                    alt="20 Years of Excellence" 
                    style={{
                        width: '180px',
                        height: 'auto',
                        maxHeight: '160px',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 12px 35px rgba(242, 111, 32, 0.4))',
                        transition: 'all 0.4s ease',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(242, 111, 32, 0.1) 0%, transparent 70%)'
                    }}
                    className="excellence-logo excellence-logo-interactive"
                />
                
                {/* Rotating Ring Animation */}
                <div 
                    className="excellence-ring"
                    style={{
                        position: 'absolute',
                        top: '-15px',
                        left: '-15px',
                        width: '210px',
                        height: '210px',
                        border: '3px solid rgba(242, 111, 32, 0.3)',
                        borderRadius: '50%',
                        borderTop: '3px solid #F26F20',
                        animation: 'excellenceRotate 4s linear infinite',
                        zIndex: -1,
                        transition: 'all 0.3s ease'
                    }}
                ></div>
                
                {/* Pulse Rings */}
                <div 
                    className="excellence-pulse"
                    style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '-20px',
                        width: '220px',
                        height: '220px',
                        border: '2px solid rgba(242, 111, 32, 0.2)',
                        borderRadius: '50%',
                        animation: 'excellencePulse 2s ease-in-out infinite',
                        zIndex: -2,
                        transition: 'all 0.3s ease'
                    }}
                ></div>
                
                {/* Additional hover effect rings */}
                <div 
                    className="excellence-hover-ring"
                    style={{
                        position: 'absolute',
                        top: '-25px',
                        left: '-25px',
                        width: '230px',
                        height: '230px',
                        border: '1px solid rgba(242, 111, 32, 0.1)',
                        borderRadius: '50%',
                        opacity: 0,
                        transform: 'scale(0.8)',
                        transition: 'all 0.4s ease',
                        zIndex: -3
                    }}
                ></div>
            </div>
            
            <div className="container" style={{position: 'relative', zIndex: 1}}>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="rs-banner-2__content">
                            {/*<div className="rs-sub-heading wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                                <img src={heart_pulse_orange2} alt=""/>
                                    <span>Welcome To Pyraramid IT Solutions</span>
                                    <img src={heart_pulse_orange} alt=""/>
                                    </div>*/}
                                    <h1 className="title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s" style={{letterSpacing: '-0.05em'}}>
                                        Driving Innovations Through Intelligent<span> Networks</span>
                                    </h1>
                                    <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">To empower organizations through intelligent, secure, and scalable network solutions that accelerate digital transformation and sustainable growth.</p>
                                    <Link className="main-btn wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.6s" to="/services">Discover More <i className="ri-arrow-right-fill"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </div>
            );
};

Banner1.propTypes = {
    heart_pulse_orange2: PropTypes.string,
    heart_pulse_orange: PropTypes.string,
};


export default Banner1;


