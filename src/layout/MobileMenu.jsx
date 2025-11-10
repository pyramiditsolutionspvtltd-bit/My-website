import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import MenuItemsSingle from './MenuItemsSingle';

const MobileMenu = ({ canvasLogo, isOnepage }) => {
    const menuRef = useRef(null);
    const [dummyState, setDummyState] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

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
                            <Link to="/" className="active" onClick={handleCloseMenu}>Home</Link>
  
                        </li>
                       
                        <li>
                            <Link to="/about" onClick={handleCloseMenu}>About</Link>
                        </li>
                        <li className="has-clid relative">
                            <Link to="/services" onClick={handleCloseMenu}>Services</Link>
                            <ul className="sub-menu">
                                <li className="has-clid">
                                    <Link to="/service-details" onClick={handleCloseMenu}>IT Services</Link>
                                    <ul className="sub-menu">
                                        <li>
                                                                       <Link to="/service/networking-internetworking" onClick={handleCloseMenu} className={location.pathname === "/service/networking-internetworking" ? "active" : ""}>Networking & Internetworking</Link>
                                                                   </li>
                                                                   <li>
                                                                       <Link to="/service/security-services-av-va" onClick={handleCloseMenu}className={location.pathname === "/service/security-services-av-va" ? "active" : ""}>Security Services (AV / VA)</Link>
                                                                   </li>
                                                                   <li>
                                                                       <Link to="/service/cyber-security" onClick={handleCloseMenu} className={location.pathname === "/service/cyber-security" ? "active" : ""}>Cyber Security</Link>
                                                                   </li>
                                                                   <li>
                                                                       <Link to="/service/audio-video-integration" onClick={handleCloseMenu} className={location.pathname === "/service/audio-video-integration" ? "active" : ""}>Audio Video Integration</Link>
                                                                   </li>
                                                                   <li>
                                                                       <Link to="/service/wireless-solutions" onClick={handleCloseMenu}className={location.pathname === "/service/wireless-solutions" ? "active" : ""}> Network Solution</Link>
                                                                   </li>
                                                                   <li>
                                                                       <Link to="/service/ip-surveillance" onClick={handleCloseMenu} className={location.pathname === "/service/ip-surveillance" ? "active" : ""}>IP Surveillance</Link>
                                                                   </li>
                                                                    <li>
                                                                       <Link to="/service/unified-communications" onClick={handleCloseMenu} className={location.pathname === "/service/unified-communications" ? "active" : ""}>Unified Communications</Link>
                                                                   </li>
                                                                    <li>
                                                                       <Link to="/service/vulnerability-assessment-antivirus" onClick={handleCloseMenu} className={location.pathname === "/service/vulnerability-assessment-antivirus" ? "active" : ""}>Vulnerability Assessment & Anti Virus Management</Link>
                                                                   </li>
                                                                    <li>
                                                                       <Link to="/service/ftth-fiber-to-home" onClick={handleCloseMenu}  className={location.pathname === "/service/ftth-fiber-to-home" ? "active" : ""}>FTTH (Fiber To The Home)</Link>
                                                                   </li>
                                    </ul>
                                </li>
                                 <li className="has-clid">
                                    <Link to="/service-details" onClick={handleCloseMenu}>Structured Cabling</Link>
                                    <ul className="sub-menu">
                                        <li>
                                                                       <Link to="/service/structured-cabling" onClick={handleCloseMenu} className={location.pathname === "/service/structured-cabling" ? "active" : ""}>Structured Cabling</Link>
                                                                   </li>
                                        
                                    </ul>
                                </li>
                                <li className="has-clid">
                                    <Link to="/service-details" onClick={handleCloseMenu}>Cloud Computing</Link>
                                    <ul className="sub-menu">
                                        <li>
                                                                        <Link to="/service/unified-computing" onClick={handleCloseMenu} className={location.pathname === "/service/unified-computing" ? "active" : ""}>Unified Computing</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/service/internet-of-things-iot" onClick={handleCloseMenu} className={location.pathname === "/service/internet-of-things-iot" ? "active" : ""}>Internet of Things (IOT)</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/service/ip-surveillance-cloud" onClick={handleCloseMenu} className={location.pathname === "/service/ip-surveillance-cloud" ? "active" : ""}>IP Surveillance</Link>
                                                                    </li>
                                    </ul>
                                </li>
                                 <li className="has-clid">
                                    <Link to="/service-details" onClick={handleCloseMenu}>Professional Services</Link>
                                    <ul className="sub-menu">
                                         <li>
                                                                        <Link to="/service/it-itil-consulting" onClick={handleCloseMenu} className={location.pathname === "/service/it-itil-consulting" ? "active" : ""}>IT (ITIL) Consulting Services</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/service/it-risk-assessment" onClick={handleCloseMenu} className={location.pathname === "/service/it-risk-assessment" ? "active" : ""}>IT Risk Assessment</Link>
                                                                    </li>
                                                                     <li>
                                                                        <Link to="/service/it-assessment" onClick={handleCloseMenu} className={location.pathname === "/service/it-assessment" ? "active" : ""}>IT Assessment</Link>
                                                                    </li>
                                    </ul>
                                </li>
                                 <li className="has-clid">
                                    <Link to="/service-details" onClick={handleCloseMenu}>Network</Link>
                                    <ul className="sub-menu">
                                        <li>
                                                                       <Link to="/service/lan-network" onClick={handleCloseMenu}className={location.pathname === "/service/lan-network" ? "active" : ""}>LAN</Link>
                                                                   </li>
                                                                   <li>
                                                                       <Link to="/service/wlan-network" onClick={handleCloseMenu} className={location.pathname === "/service/wlan-network" ? "active" : ""}>WLAN</Link>
                                                                   </li>
                                                                   <li>
                                                                       <Link to="/service/wan-network" onClick={handleCloseMenu} className={location.pathname === "/service/wan-network" ? "active" : ""}>WAN</Link>
                                                                   </li>
                                                                   <li>
                                                                       <Link to="/service/data-center-network" onClick={handleCloseMenu} className={location.pathname === "/service/data-center-network" ? "active" : ""}>Data Center</Link>
                                                                   </li>
                                                                   <li>
                                                                       <Link to="/service/gpon-network" onClick={handleCloseMenu} className={location.pathname === "/service/gpon-network" ? "active" : ""}>GPON</Link>
                                                                   </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        
                        
                        <li className="has-clid relative">
                            <Link to="/our-projects" onClick={handleCloseMenu}>Pages</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/our-projects" onClick={handleCloseMenu}>Project</Link>
                                </li>
                                <li>
                                    <Link to="/project-details" onClick={handleCloseMenu}>Project Details</Link>
                                </li>
                                <li>
                                    <Link to="/our-team" onClick={handleCloseMenu}>Team</Link>
                                </li>
                                <li>
                                    <Link to="/team-details" onClick={handleCloseMenu}>Team Details</Link>
                                </li>
                                <li>
                                    <Link to="/pricing" onClick={handleCloseMenu}>Pricing</Link>
                                </li>
                                <li>
                                    <Link to="/faq" onClick={handleCloseMenu}>Faq</Link>
                                </li>
                                <li>
                                    <Link to="/appointment" onClick={handleCloseMenu}>Appointment</Link>
                                </li>
                                <li className="has-clid">
                                    <Link to="/shop" onClick={handleCloseMenu}> Shop</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/shop" onClick={handleCloseMenu}>Product</Link>
                                        </li>
                                        <li>
                                            <Link to="/product-single" onClick={handleCloseMenu}>Product Single</Link>
                                        </li>
                                        <li>
                                            <Link to="/cart" onClick={handleCloseMenu}>Cart</Link>
                                        </li>
                                        <li>
                                            <Link to="/checkout" onClick={handleCloseMenu}>Checkout</Link>
                                        </li>
                                        <li>
                                            <Link to="/my-account" onClick={handleCloseMenu}>My Account</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="has-clid relative">
                            <Link to="/blog-standard" onClick={handleCloseMenu}>Blog</Link>
                            <ul className="sub-menu">
                                <li><Link to="/blog-standard" onClick={handleCloseMenu}>Blog Standard </Link></li>
                                <li><Link to="/blog-single" onClick={handleCloseMenu}>Blog Single</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact" onClick={handleCloseMenu}>Contact</Link> </li>
                    </>
                )}
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
