import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import defaultLightLogo from '../assets/images/techzen_logo_home_2.png'

const Footer = ({ info_3, info_1, info_2, footerLogo, passClass, showTopPart }) => {
    // State variables to manage form inputs
    const [email, setEmail] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data here (e.g., send email)
        console.log('Submitted Email:', email);
        // Clear form input after submission
        setEmail('');
    };

    return (
        <footer className={`${passClass ? passClass : 'rs-footer rs-footer-2'}`}>
            {(showTopPart !== false) && (
                <div className="rs-footer__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="rs-footer__info-box">
                                    <div className="icon">
                                        <img src={info_3} alt="" />
                                    </div>
                                    <div className="content">
                                        <span>Contact Us</span>
                                        <Link to="tel:+004555012065">+040 4200 3912</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="rs-footer__info-box">
                                    <div className="icon">
                                        <img src={info_1} alt="" />
                                    </div>
                                    <div className="content">
                                        <span>Email Us</span>
                                        <Link to="mailto:info@yourname.com">info@pyramidsolutions.co.in</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="rs-footer__info-box">
                                    <div className="icon">
                                        <img src={info_2} alt="" />
                                    </div>
                                    <div className="content">
                                        <span>Address</span>
                                        <h4 className="title"> H.No.7-1-213/B,Near SR Nagar Police Station, Ameerpet, Hyderabad, Telangana 500016 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="rs-footer__main-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="rs-footer__about-box">
                                <Link to="index-2"><img src={footerLogo ? footerLogo : defaultLightLogo} alt="" /></Link>
                                <p> Your partner for seamless connectivity,
Pyramid IT turns tech into opportunity.</p>
                                {
                                    passClass !== 'rs-footer' && 'rs-footer rs-footer-2 rs-footer-3' ?
                                        <div className="rs-footer__social">
                                            <ul>
                                                <li><Link to="#"><i className="ri-facebook-fill" /></Link></li>
                                                <li><Link to="#"><i className="ri-twitter-fill" /></Link></li>
                                                <li><Link to="#"><i className="ri-instagram-fill" /></Link></li>
                                                <li><Link to="#"><i className="ri-linkedin-fill" /></Link></li>
                                            </ul>
                                        </div> :
                                        <div className="rs-btn">
                                            <Link className="main-btn" to="/about"> Discover More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                                <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                            </svg></Link>
                                        </div>
                                }

                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="rs-footer__navigation">
                                <div className="rs-footer-title">
                                    <h4 className="title">Our Services</h4>
                                </div>
                                <ul>
                                    <li><Link to="/service-details-2"><i className="ri-arrow-right-fill" /> IT Services</Link></li>
                                    <li><Link to="/service-details-2"><i className="ri-arrow-right-fill" /> Structured Cabling</Link></li>
                                    <li><Link to="/service-details-2"><i className="ri-arrow-right-fill" /> Cloud Computing</Link></li>
                                    <li><Link to="/service-details-2"><i className="ri-arrow-right-fill" /> Professional Services</Link></li>
                                    <li><Link to="/service-details-2"><i className="ri-arrow-right-fill" /> Networking Solutions</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="rs-footer__navigation rs-footer--navigation">
                                <div className="rs-footer-title">
                                    <h4 className="title">Information</h4>
                                </div>
                                <ul>
                                    <li><Link to="/about"><i className="ri-arrow-right-fill" /> About Pyramid IT Solutions</Link></li>
                                    <li><Link to="/corporate-governance"><i className="ri-arrow-right-fill" /> Corporate Governance</Link></li>
                                    <li><Link to="/careers"><i className="ri-arrow-right-fill" /> Careers</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-3">
                            <div className="rs-footer__newsletter">
                                <div className="rs-footer-title">
                                    <h4 className="title">Newsletter</h4>
                                </div>
                                <p>Register now to get latest updates on promotions & coupons.</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-box">
                                        <input
                                            type="email"
                                            name='email'
                                            placeholder="Your email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <button className={`${passClass === 'rs-footer rs-footer-2 rs-footer-3' ? 'main-btn-2' : "main-btn"}`} type="submit">
                                            <Link to='/contact'>
                                                Subscribe <svg width="13" height="14" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.5 7.8125H0V6.1875H6.5V0.5L13 7L6.5 13.5V7.8125Z" fill="#fff"></path>
                                                </svg>
                                            </Link>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="rs-footer__menu">
                <div className="container">
                    <div className="row align-items-center">

                        {
                            passClass === 'rs-footer' ?  //main class of home-3
                                <>
                                    <div className="col-lg-8">
                                        <div className="rs-footer__menu-box">
                                            <ul>
                                                <li><Link to="/contact">Privacy Policy</Link></li>
                                                <li><Link to="/contact">Terms of  use</Link></li>
                                                <li><Link to="/contact">Sitemap</Link></li>
                                                <li><Link to="/contact">Career</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="rs-footer__social">
                                            <ul>
                                                <li><Link to="#"><i className="ri-facebook-fill" /></Link></li>
                                                <li><Link to="#"><i className="ri-twitter-fill" /></Link></li>
                                                <li><Link to="#"><i className="ri-instagram-fill" /></Link></li>
                                                <li><Link to="#"><i className="ri-linkedin-fill" /></Link></li>
                                                <li><Link to="#"><i className="ri-behance-fill"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </> :
                                <>
                                    <div className="col-lg-5">
                                        <div className="rs-footer__copyright-text">
                                           <p>© 2025 Pyramid IT Solutions. Designed By <Link target="_blank" to="https://aptitps.com/">APTITPS.</Link></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="rs-footer__menu-box">
                                            <ul>
                                                <li><Link to="/contact">Privacy Policy</Link></li>
                                                <li><Link to="/contact">Terms of use</Link></li>
                                                <li><Link to="/contact">Sitemap</Link></li>
                                                <li><Link to="/contact">Career</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                        }

                    </div>
                </div>
            </div>
            {
                passClass === 'rs-footer' &&
                <div className="rs-footer__copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rs-footer__copyright-text">
                                    <p>© 2025 Pyramid IT Solutions. Designed By <Link target="_blank" to="https://rstheme.com/">APT IT.</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </footer>
    );
};

Footer.propTypes = {
    info_3: PropTypes.string,
    info_1: PropTypes.string,
    info_2: PropTypes.string,
    footerLogo: PropTypes.string,
    passClass: PropTypes.string,
    showTopPart: PropTypes.bool
};

export default Footer;

