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
            '/service/security-services-av-va',
            '/service/cyber-security',
            '/service/audio-video-integration',
            '/service/wireless-solutions',
            '/service/ip-surveillance',
            '/service/unified-communications',
            '/service/vulnerability-assessment-antivirus',
            '/service/ftth-fiber-to-home'
        ];
        return itServicesPaths.includes(location.pathname);
    };

    // Helper function to check if any Structured Cabling submenu is active
    const isStructuredCablingActive = () => {
        const structuredCablingPaths = [
            '/service/structured-cabling',
            '/service/utp-cabling',
            '/service/stp-cabling',
            '/service/optical-cabling',
            '/service/voice-cabling'
        ];
        return structuredCablingPaths.includes(location.pathname);
    };

    // Helper function to check if any Cloud Computing submenu is active
    const isCloudComputingActive = () => {
        const cloudComputingPaths = [
            '/service/unified-computing',
            '/service/internet-of-things-iot',
            '/service/ip-surveillance-cloud'
        ];
        return cloudComputingPaths.includes(location.pathname);
    };

    // Helper function to check if any Professional Services submenu is active
    const isProfessionalServicesActive = () => {
        const professionalServicesPaths = [
            '/service/it-itil-consulting',
            '/service/it-risk-assessment',
            '/service/it-assessment'
        ];
        return professionalServicesPaths.includes(location.pathname);
    };

    // Helper function to check if any Network submenu is active
    const isNetworkActive = () => {
        const networkPaths = [
            '/service/lan-network',
            '/service/wlan-network',
            '/service/wan-network',
            '/service/data-center-network',
            '/service/gpon-network'
        ];
        return networkPaths.includes(location.pathname);
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
                        <Link to="/services" className={isITServicesActive() ? "active" : ""}>IT Services <i className="ri-arrow-down-s-fill" /></Link>
                        <ul className="sub-menu">
                            {/* <li>
                                <Link to="/service/networking-internetworking" className={location.pathname === "/service/networking-internetworking" ? "active" : ""}>Networking & Internetworking</Link>
                            </li> */}
                            <li>
                                <Link to="/service/security-services-av-va" className={location.pathname === "/service/security-services-av-va" ? "active" : ""}>Security Services (AV / VA)</Link>
                            </li>
                            <li>
                                <Link to="/service/cyber-security" className={location.pathname === "/service/cyber-security" ? "active" : ""}>Cyber Security</Link>
                            </li>
                            <li>
                                <Link to="/service/audio-video-integration" className={location.pathname === "/service/audio-video-integration" ? "active" : ""}>Audio Video Integration</Link>
                            </li>
                            <li>
                                <Link to="/service/wireless-solutions" className={location.pathname === "/service/wireless-solutions" ? "active" : ""}> Network Solution</Link>
                            </li>
                            <li>
                                <Link to="/service/ip-surveillance" className={location.pathname === "/service/ip-surveillance" ? "active" : ""}>IP Surveillance</Link>
                            </li>
                             <li>
                                <Link to="/service/unified-communications" className={location.pathname === "/service/unified-communications" ? "active" : ""}>Unified Communications</Link>
                            </li>
                             <li>
                                <Link to="/service/vulnerability-assessment-antivirus" className={location.pathname === "/service/vulnerability-assessment-antivirus" ? "active" : ""}>Vulnerability Assessment & Anti Virus Management</Link>
                            </li>
                             <li>
                                <Link to="/service/ftth-fiber-to-home" className={location.pathname === "/service/ftth-fiber-to-home" ? "active" : ""}>FTTH (Fiber To The Home)</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-clid">
                        <Link to="/services" className={isStructuredCablingActive() ? "active" : ""}>Structured Cabling <i className="ri-arrow-down-s-fill" /></Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/service/structured-cabling" className={location.pathname === "/service/structured-cabling" ? "active" : ""}>Structured Cabling</Link>
                            </li>
                             <li>
                                <Link to="/service/utp-cabling" className={location.pathname === "/service/utp-cabling" ? "active" : ""}>UTP Cabling</Link>
                            </li>
                            <li>
                                <Link to="/service/stp-cabling" className={location.pathname === "/service/stp-cabling" ? "active" : ""}>STP Cabling</Link>
                            </li>
                            <li>
                                <Link to="/service/optical-cabling" className={location.pathname === "/service/optical-cabling" ? "active" : ""}>Optical Cabling</Link>
                            </li>
                             <li>
                                <Link to="/service/voice-cabling" className={location.pathname === "/service/voice-cabling" ? "active" : ""}>Voice Cabling Services</Link>
                            </li>
                        </ul>
                    </li>
                    
                    <li className="has-clid">
                        <Link to="/services" className={isCloudComputingActive() ? "active" : ""}>Cloud Computing <i className="ri-arrow-down-s-fill" /></Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/service/unified-computing" className={location.pathname === "/service/unified-computing" ? "active" : ""}>Unified Computing</Link>
                            </li>
                            <li>
                                <Link to="/service/internet-of-things-iot" className={location.pathname === "/service/internet-of-things-iot" ? "active" : ""}>Internet of Things (IOT)</Link>
                            </li>
                            <li>
                                <Link to="/service/ip-surveillance-cloud" className={location.pathname === "/service/ip-surveillance-cloud" ? "active" : ""}>IP Surveillance</Link>
                            </li>
                        </ul>
                    </li>
            
                    <li className="has-clid">
                        <Link to="/services" className={isProfessionalServicesActive() ? "active" : ""}>Professional Services <i className="ri-arrow-down-s-fill" /></Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/service/it-itil-consulting" className={location.pathname === "/service/it-itil-consulting" ? "active" : ""}>IT (ITIL) Consulting Services</Link>
                            </li>
                            <li>
                                <Link to="/service/it-risk-assessment" className={location.pathname === "/service/it-risk-assessment" ? "active" : ""}>IT Risk Assessment</Link>
                            </li>
                             <li>
                                <Link to="/service/it-assessment" className={location.pathname === "/service/it-assessment" ? "active" : ""}>IT Assessment</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-clid">
                        <Link to="/services" className={isNetworkActive() ? "active" : ""}>Network <i className="ri-arrow-down-s-fill" /></Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/service/lan-network" className={location.pathname === "/service/lan-network" ? "active" : ""}>LAN</Link>
                            </li>
                            <li>
                                <Link to="/service/wlan-network" className={location.pathname === "/service/wlan-network" ? "active" : ""}>SD-WAN</Link>
                            </li>
                            <li>
                                <Link to="/service/wan-network" className={location.pathname === "/service/wan-network" ? "active" : ""}>WAN</Link>
                            </li>
                            <li>
                                <Link to="/service/data-center-network" className={location.pathname === "/service/data-center-network" ? "active" : ""}>Data Center</Link>
                            </li>
                            <li>
                                <Link to="/service/gpon-network" className={location.pathname === "/service/gpon-network" ? "active" : ""}>GPON</Link>
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
