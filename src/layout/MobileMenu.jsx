import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import MenuItemsSingle from './MenuItemsSingle';

const MobileMenu = ({ canvasLogo, isOnepage }) => {
    const location = useLocation();
    const menuRef = useRef(null);
    const [dummyState, setDummyState] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

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

    const handleToggle = () => {
        if (document.body.classList.contains('menu-is-open')) {
            document.body.classList.remove('menu-is-open');
        } else {
            document.body.classList.add('menu-is-open');
        }
        setDummyState(!dummyState);
    };

    const handleCloseMenu = (event) => {
        const target = event.currentTarget;
        const parent = target.parentElement;
        
        // Check if the parent element has a child with class 'sub-menu'
        if (!parent.querySelector('.sub-menu')) {
            document.body.classList.remove('menu-is-open');
            setDummyState(!dummyState);
        }
    };

    useEffect(() => {
        const handleClick = (event) => {
            event.preventDefault();
            const target = event.currentTarget;
            target.parentElement.classList.toggle("highlight");
        };

        const menuItems = menuRef.current.querySelectorAll(".has-clid > a");

        menuItems.forEach(item => {
            item.addEventListener('click', handleClick);
        });

        return () => {
            menuItems.forEach(item => {
                item.removeEventListener('click', handleClick);
            });
        };
    }, []);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="offcanvas-menu offcanvas-menu-2">
            <div className="menu-canvas-close" onClick={handleToggle}><i className="ri-close-line"></i></div>
            <div className="offcanvas-menu-inner">
                <div className="offc-logo mb-40">
                    <Link to="/"><img src={canvasLogo} alt="Techzen Logo" /></Link>
                </div>
                <ul ref={menuRef} className="nav-menu">
                {isOnepage ? (
                    <MenuItemsSingle />
                ) : (
                    <>
                        <li>
                            <Link 
                                to="/" 
                                className={location.pathname === "/" ? "active" : ""} 
                                onClick={handleCloseMenu}
                            >
                                Home
                            </Link>
                        </li>
                       
                        <li>
                            <Link 
                                to="/about" 
                                className={location.pathname === "/about" ? "active" : ""} 
                                onClick={handleCloseMenu}
                            >
                                About
                            </Link>
                        </li>

                        <li className="has-clid relative">
                            <Link 
                                to="/services" 
                                className={location.pathname === "/services" ? "active" : ""}
                            >
                                Services
                            </Link>
                            <ul className="sub-menu">
                                <li className="has-clid">
                                    <Link 
                                        to="/services" 
                                        className={isITServicesActive() ? "active" : ""}
                                    >
                                        IT Services
                                    </Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link 
                                                to="/service/security-services-av-va" 
                                                className={location.pathname === "/service/security-services-av-va" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                Security Services (AV / VA)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/cyber-security" 
                                                className={location.pathname === "/service/cyber-security" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                Cyber Security
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/audio-video-integration" 
                                                className={location.pathname === "/service/audio-video-integration" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                Audio Video Integration
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/wireless-solutions" 
                                                className={location.pathname === "/service/wireless-solutions" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                Network Solution
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/ip-surveillance" 
                                                className={location.pathname === "/service/ip-surveillance" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                IP Surveillance
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/unified-communications" 
                                                className={location.pathname === "/service/unified-communications" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                Unified Communications
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/vulnerability-assessment-antivirus" 
                                                className={location.pathname === "/service/vulnerability-assessment-antivirus" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                Vulnerability Assessment & Anti Virus Management
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/ftth-fiber-to-home" 
                                                className={location.pathname === "/service/ftth-fiber-to-home" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                FTTH (Fiber To The Home)
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="has-clid">
                                    <Link 
                                        to="/services" 
                                        className={isStructuredCablingActive() ? "active" : ""}
                                    >
                                        Structured Cabling
                                    </Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link 
                                                to="/service/structured-cabling" 
                                                className={location.pathname === "/service/structured-cabling" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                Structured Cabling
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/utp-cabling" 
                                                className={location.pathname === "/service/utp-cabling" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                UTP Cabling
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/stp-cabling" 
                                                className={location.pathname === "/service/stp-cabling" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                STP Cabling
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/optical-cabling" 
                                                className={location.pathname === "/service/optical-cabling" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                Optical Cabling
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/voice-cabling" 
                                                className={location.pathname === "/service/voice-cabling" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                Voice Cabling Services
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                
                                <li className="has-clid">
                                    <Link 
                                        to="/services" 
                                        className={isCloudComputingActive() ? "active" : ""}
                                    >
                                        Cloud Computing
                                    </Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link 
                                                to="/service/unified-computing" 
                                                className={location.pathname === "/service/unified-computing" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                Unified Computing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/internet-of-things-iot" 
                                                className={location.pathname === "/service/internet-of-things-iot" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                Internet of Things (IOT)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/ip-surveillance-cloud" 
                                                className={location.pathname === "/service/ip-surveillance-cloud" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                IP Surveillance
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                        
                                <li className="has-clid">
                                    <Link 
                                        to="/services" 
                                        className={isProfessionalServicesActive() ? "active" : ""}
                                    >
                                        Professional Services
                                    </Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link 
                                                to="/service/it-itil-consulting" 
                                                className={location.pathname === "/service/it-itil-consulting" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                IT (ITIL) Consulting Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/it-risk-assessment" 
                                                className={location.pathname === "/service/it-risk-assessment" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                IT Risk Assessment
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/it-assessment" 
                                                className={location.pathname === "/service/it-assessment" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                IT Assessment
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="has-clid">
                                    <Link 
                                        to="/services" 
                                        className={isNetworkActive() ? "active" : ""}
                                    >
                                        Network
                                    </Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link 
                                                to="/service/lan-network" 
                                                className={location.pathname === "/service/lan-network" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                LAN
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/wlan-network" 
                                                className={location.pathname === "/service/wlan-network" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                SD-WAN
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/wan-network" 
                                                className={location.pathname === "/service/wan-network" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                WAN
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/data-center-network" 
                                                className={location.pathname === "/service/data-center-network" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                Data Center
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                to="/service/gpon-network" 
                                                className={location.pathname === "/service/gpon-network" ? "active" : ""}
                                                onClick={handleCloseMenu}
                                            >
                                                GPON
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link 
                                to="/careers" 
                                className={location.pathname === "/careers" ? "active" : ""} 
                                onClick={handleCloseMenu}
                            >
                                Careers
                            </Link>
                        </li>
                        
                        <li>
                            <Link 
                                to="/blog-standard" 
                                className={location.pathname === "/blog-standard" ? "active" : ""} 
                                onClick={handleCloseMenu}
                            >
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to="/contact" 
                                className={location.pathname === "/contact" ? "active" : ""} 
                                onClick={handleCloseMenu}
                            >
                                Contact
                            </Link>
                        </li>
                    </>
                )}
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
