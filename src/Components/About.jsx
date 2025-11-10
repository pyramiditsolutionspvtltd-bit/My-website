import { useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import VideoPopup from '../layout/VideoPopUp';
import PropTypes from 'prop-types';

const About = ({ about_img, about_shape, heart_pulse_rate_orange_2, heart_pulse_rate_orange }) => {
    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    const tabItem = [
        {
            tabTitle: 'Our Mission',
            eventKeys: 'mission',
            details: 'Our mission declares our purpose as a company and acts as a standard for all our decisions and actions',
            item1: 'Create value to the customers',
            item2: 'Operational Delivery at best',
            link1: 'Know More About Us',
            link1Url: '/about',
            link2Url: 'https://www.youtube.com/watch?v=5CLmRIHR5Zw'
        },
        {
            tabTitle: 'Our Vision',
            eventKeys: 'vision',
            details: 'To be a leader in the SMB area for IT Infrastructure implementation and Management Services.',
            item1: 'Leading SMBs in IT infrastructure and management',
            item2: 'Empowering SMBs with reliable IT solutions',
            link1: 'Know More About Us',
            link1Url: '/about',
            link2Url: 'https://www.youtube.com/watch?v=5CLmRIHR5Zw'
        },
        {
            tabTitle: 'Core Value',
            eventKeys: 'value',
            details: 'Our values serve as a compass for our actions and describe how we behave in the world.',
            item1: 'Be real in every aspect.',
            item2: 'If it is to be, it’s up to me',
            link1: 'Know More About Us',
            link1Url: '/about',
            link2Url: 'https://www.youtube.com/watch?v=5CLmRIHR5Zw'
        },
    ];

    return (
        <div id="rs-about" className="rs-about-2 pt-120 pb-30">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="rs-about-2__thumb">
                            <img src={about_img} alt="" />
                            <div className="rs-shape">
                                <img className="gsap-move left-100 start-91" src={about_shape} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-about-2__main-content">
                            <div className="rs-section-title black">
                                <div className="top-sub-heading">
                                    <img src={heart_pulse_rate_orange_2} alt="icon" />
                                    <span>About Company</span>
                                    <img src={heart_pulse_rate_orange} alt="icon" />
                                </div>
                                <h2 className="title split-in-fade">One of the Fast-growing Networking Company based at Hyderabad</h2>
                                <p>Pyramid has established its expertise in IT Services by efficiently providing customer-centric services to several small, medium and large organizations in India by the help of technically qualified professionals.</p>
                                
                                <div className="rs-counter-content" style={{marginBottom: '30px', marginTop: '50px'}}>
                                    <h3 className="title" style={{color: '#F26F20', fontSize: '48px', fontWeight: 'bold', marginBottom: '5px'}}>
                                        <span className="rs-count">20</span>+
                                    </h3>
                                    <span style={{display: 'block', fontSize: '18px', fontWeight: '500', color: '#333'}}>Years of Experience</span>
                                </div>
                                
                                <div id="rs-tabs" className="skltbs-theme-light">
                                    <Tab.Container defaultActiveKey="mission">
                                        <Nav justify variant="tabs">
                                            {
                                                tabItem && tabItem.map((item, index) => (
                                                    <Nav.Item key={index}>
                                                        <Nav.Link eventKey={item.eventKeys} className="skltbs-tab">{item.tabTitle}</Nav.Link>
                                                    </Nav.Item>
                                                ))
                                            }
                                        </Nav>
                                        <Tab.Content>
                                            {
                                                tabItem && tabItem.map((item, index) => (
                                                    <Tab.Pane eventKey={item.eventKeys} key={index} className="skltbs-panel">
                                                        <p>{item.details}</p>
                                                        <ul>
                                                            <li><i className="ri-share-forward-fill"></i>{item.item1}</li>
                                                            <li><i className="ri-share-forward-fill"></i>{item.item2}</li>
                                                        </ul>
                                                        <Link className="main-btn" to={item.link1Url}>
                                                            {item.link1}
                                                            <i className="ri-arrow-right-fill"></i>
                                                        </Link>
                                                        <div className="play-icon">
                                                            <Link className='rs-popup-videos' to='#' onClick={openVideoPopup}>
                                                                <i className="ri-play-fill"></i>
                                                            </Link>
                                                        </div>
                                                    </Tab.Pane>
                                                ))
                                            }
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopup isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl="https://www.youtube.com/embed/5CLmRIHR5Zw" />
        </div>
    );
};

About.propTypes = {
    about_img: PropTypes.string,
    about_shape: PropTypes.string,
    heart_pulse_rate_orange_2: PropTypes.string,
    heart_pulse_rate_orange: PropTypes.string,
};

export default About;
