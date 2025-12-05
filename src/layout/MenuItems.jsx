/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const MenuItems = ({firstLvlMenu, secondLvlMenu}) => {
    const location = useLocation();

    // Helper function to check if any IT Services submenu is active
    const isITServicesActive = () => {
        const itServicesPaths = [
            '/service/networking-internetworking',
            '/service/ip-surveillance',
            '/service/unified-communications',
            '/service/ftth-fiber-to-home',
            '/service/audio-video-integration',
            '/service/data-center-network'
        ];
        return itServicesPaths.includes(location.pathname);
    };

    // Helper function to check if any Structured Cabling submenu is active
    const isStructuredCablingActive = () => {
        const structuredCablingPaths = [
            '/service/structured-cabling',
            '/service/gpon-network'
        ];
        return structuredCablingPaths.includes(location.pathname);
    };

    // Helper function to check if any Cloud Computing submenu is active
    const isCloudComputingActive = () => {
        const cloudComputingPaths = [
            '/service/cloud-computing-service',
            '/service/internet-of-things-iot',
            '/service/unified-computing'
        ];
        return cloudComputingPaths.includes(location.pathname);
    };

    // Helper function to check if any Professional Services submenu is active
    const isProfessionalServicesActive = () => {
        const professionalServicesPaths = [
            '/service/cyber-security',
            '/service/vulnerability-assessment-antivirus',
            '/service/it-risk-assessment',
            '/service/it-assessment',
            '/service/it-itil-consulting'
        ];
        return professionalServicesPaths.includes(location.pathname);
    };

    return (
        <>
            <li className="has-clid relative">
                <Link to="/" className={firstLvlMenu === 'home' ? "active" : ""}>
                    <cite className="rs_item_wrap">
                        Home
                        <span className="menu-item-description" title="06"></span>
                    </cite>
                </Link>
            </li>
            <li>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
            </li>
            <li className="has-clid relative">
                <Link to="/services" className={firstLvlMenu === 'services' ? "active" : ""}>
                    <cite className="rs_item_wrap">
                        Services
                        <span className="menu-item-description" title="05"></span>
                    </cite>
                </Link>
                <ul className="sub-menu">
                    <li className="has-clid">
                        <Link to="/services" className={isITServicesActive() ? "active" : ""}>IT Service <i className="ri-arrow-down-s-fill" /></Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/service/networking-internetworking" className={location.pathname === "/service/networking-internetworking" ? "active" : ""}>Network Solutions</Link>
                            </li>
                            <li>
                                <Link to="/service/ip-surveillance" className={location.pathname === "/service/ip-surveillance" ? "active" : ""}>IP Surveillance</Link>
                            </li>
                            <li>
                                <Link to="/service/unified-communications" className={location.pathname === "/service/unified-communications" ? "active" : ""}>Unified Communication</Link>
                            </li>
                            <li>
                                <Link to="/service/ftth-fiber-to-home" className={location.pathname === "/service/ftth-fiber-to-home" ? "active" : ""}>FTTH</Link>
                            </li>
                            <li>
                                <Link to="/service/audio-video-integration" className={location.pathname === "/service/audio-video-integration" ? "active" : ""}>Audio Video intergration</Link>
                            </li>
                            <li>
                                <Link to="/service/data-center-network" className={location.pathname === "/service/data-center-network" ? "active" : ""}>Data Center Services</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-clid">
                        <Link to="/services" className={isStructuredCablingActive() ? "active" : ""}>Cabling Services <i className="ri-arrow-down-s-fill" /></Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/service/structured-cabling" className={location.pathname === "/service/structured-cabling" ? "active" : ""}>Strcutured Cabling</Link>
                            </li>
                            <li>
                                <Link to="/service/gpon-network" className={location.pathname === "/service/gpon-network" ? "active" : ""}>GPON</Link>
                            </li>
                        </ul>
                    </li>
                    
                    <li className="has-clid">
                        <Link to="/services" className={isCloudComputingActive() ? "active" : ""}>Cloud Services <i className="ri-arrow-down-s-fill" /></Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/service/cloud-computing-service" className={location.pathname === "/service/cloud-computing-service" ? "active" : ""}>Cloud Computing</Link>
                            </li>
                            <li>
                                <Link to="/service/internet-of-things-iot" className={location.pathname === "/service/internet-of-things-iot" ? "active" : ""}>IOT</Link>
                            </li>
                            <li>
                                <Link to="/service/unified-computing" className={location.pathname === "/service/unified-computing" ? "active" : ""}>Unified Computing</Link>
                            </li>
                        </ul>
                    </li>
            
                    <li className="has-clid">
                        <Link to="/services" className={isProfessionalServicesActive() ? "active" : ""}>Professional Services <i className="ri-arrow-down-s-fill" /></Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/service/cyber-security" className={location.pathname === "/service/cyber-security" ? "active" : ""}>Cyber Security</Link>
                            </li>
                            <li>
                                <Link to="/service/vulnerability-assessment-antivirus" className={location.pathname === "/service/vulnerability-assessment-antivirus" ? "active" : ""}>VAPT</Link>
                            </li>
                            <li>
                                <Link to="/service/it-risk-assessment" className={location.pathname === "/service/it-risk-assessment" ? "active" : ""}>IT Risk Assessment</Link>
                            </li>
                            <li>
                                <Link to="/service/it-assessment" className={location.pathname === "/service/it-assessment" ? "active" : ""}>IT Assessment</Link>
                            </li>
                            <li>
                                <Link to="/service/it-itil-consulting" className={location.pathname === "/service/it-itil-consulting" ? "active" : ""}>IT Consulting</Link>
                            </li>
                        </ul>
                    </li>
                    
                </ul>
            </li>
            <li>
                <Link to="/careers" className={location.pathname === "/careers" ? "active" : ""}>Careers</Link>
            </li>
            <li className="has-clid relative">
                <Link to="/blog-standard" className={firstLvlMenu === 'blog' ? "active" : ""}>
                    <cite className="rs_item_wrap">
                        Blog
                        <span className="menu-item-description" title="02"></span>
                    </cite>
                </Link>
                {/* <ul className="sub-menu">
                    <li>
                        <Link to="/blog-standard" className={location.pathname === "/blog-standard" ? "active" : ""}>Blog Standard</Link>
                    </li>
                    <li>
                        <Link to="/blog-single" className={location.pathname === "/blog-single" ? "active" : ""}>Blog Single</Link>
                    </li>
                </ul> */}
            </li>
            <li>
                <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
            </li>
        </>
    );
};

MenuItems.propTypes = {
    firstLvlMenu: PropTypes.string,
    secondLvlMenu: PropTypes.string
};

export default MenuItems;
