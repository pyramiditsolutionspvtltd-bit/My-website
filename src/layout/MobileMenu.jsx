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
                        <li className="has-clid relative">
                            <Link to="/" className="active" onClick={handleCloseMenu}>Home</Link>
                            <ul className="sub-menu">
                                <li className="has-clid">
                                    <Link className="active" to="/" onClick={handleCloseMenu}>Multipage</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link className="active" to="/" onClick={handleCloseMenu}>Home 01</Link>
                                        </li>
                                        <li>
                                            <Link to="/home-2" onClick={handleCloseMenu}>Home 02</Link>
                                        </li>
                                        <li>
                                            <Link to="/home-3" onClick={handleCloseMenu}>Home 03</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-clid">
                                    <Link to="/one-page-home-1" onClick={handleCloseMenu}>Onepage</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to='/one-page-home-1' onClick={handleCloseMenu}>Onepage 01</Link>
                                        </li>
                                        <li>
                                            <Link to='/one-page-home-2' onClick={handleCloseMenu}>Onepage 02</Link>
                                        </li>
                                        <li>
                                            <Link to='/one-page-home-3' onClick={handleCloseMenu}>Onepage 03</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/about" onClick={handleCloseMenu}>About</Link>
                        </li>
                        <li className="has-clid relative">
                            <Link to="/services" onClick={handleCloseMenu}>Services</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/services" onClick={handleCloseMenu}>Service Style 01</Link>
                                </li>
                                <li>
                                    <Link to="/services-2" onClick={handleCloseMenu}>Service Style 02</Link>
                                </li>
                                <li className="has-clid">
                                    <Link to="/service-details" onClick={handleCloseMenu}>Service Details</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/service-details" onClick={handleCloseMenu}>Service Details Style 01</Link>
                                        </li>
                                        <li>
                                            <Link to="/service-details-2" onClick={handleCloseMenu}>Service Details Style 02</Link>
                                        </li>
                                        <li>
                                            <Link to="/service-details-3" onClick={handleCloseMenu}>Service Details Style 03</Link>
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
