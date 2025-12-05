import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import MenuItems from './MenuItems';
import MobileMenu from './MobileMenu';
import MenuItemsSingle from './MenuItemsSingle';
import PropTypes from 'prop-types';
import defaultLightLogo from '../assets/images/techzen_logo_home_2.png'
import defaultDarkLogo from '../assets/images/main_logo_dark.png'
import { getAllServices } from '../data/servicesData';

const Navbar = ({ normalLogo, stickyLogo, canvasLogo, layout, phone, container, firstLvlMenu, secondLvlMenu, isOnepage }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [dummyState, setDummyState] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const navigate = useNavigate();

    // Define searchable content
    const searchableContent = [
        // Services
        ...getAllServices().map(service => ({
            title: service.title,
            description: service.description,
            keywords: [
                service.title,
                service.category,
                service.description,
                ...(service.features || [])
            ].join(' ').toLowerCase(),
            link: `/service/${service.id}`,
            type: 'Service'
        })),
        // Pages
        { title: 'Home', description: 'Welcome to Pyramid IT Solutions', keywords: 'home welcome pyramid it solutions', link: '/', type: 'Page' },
        { title: 'About Us', description: 'Learn more about Pyramid IT Solutions', keywords: 'about us company profile team history', link: '/about', type: 'Page' },
        { title: 'Services', description: 'Our comprehensive IT services', keywords: 'services solutions offerings', link: '/services', type: 'Page' },
        { title: 'Contact Us', description: 'Get in touch with us', keywords: 'contact us reach location address phone email', link: '/contact', type: 'Page' },
        { title: 'Careers', description: 'Join our team', keywords: 'careers jobs opportunities employment', link: '/careers', type: 'Page' },
        { title: 'Corporate Governance', description: 'Our corporate governance policies', keywords: 'corporate governance policies compliance', link: '/corporate-governance', type: 'Page' }
    ];

    const handleChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        
        if (query.trim().length > 0) {
            // Perform search
            const results = searchableContent.filter(item => 
                item.keywords.includes(query.toLowerCase())
            ).slice(0, 5); // Limit to 5 results
            
            setSearchResults(results);
            setShowResults(true);
        } else {
            setSearchResults([]);
            setShowResults(false);
        }
    };
    
    const handleToggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            // Focus on search input when opening
            setTimeout(() => {
                const searchInput = document.querySelector('.search-input');
                if (searchInput) searchInput.focus();
            }, 100);
        } else {
            // Clear search when closing
            setSearchQuery('');
            setSearchResults([]);
            setShowResults(false);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim() && searchResults.length > 0) {
            // Navigate to first result
            navigate(searchResults[0].link);
            setIsSearchOpen(false);
            setSearchQuery('');
            setSearchResults([]);
            setShowResults(false);
        }
    };

    const handleResultClick = (link) => {
        navigate(link);
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
        setShowResults(false);
    };

    const handleToggle = () => {
        if (document.body.classList.contains('menu-is-open')) {
            document.body.classList.remove('menu-is-open');
        } else {
            document.body.classList.add('menu-is-open');
        }
        setDummyState(!dummyState);
    };

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
        <>
            <div className={`full-width-header ${layout || 'rs-header-layout2'}`}>
                <header id="rs-header" className="rs-header">
                    {/* Top nav bar hidden by default. To show, wrap this block in a condition or remove comment. */}
                    {/*
                    {layout === 'rs-header-layout2' && (
                         <div className="rs-header-topber">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="rs-flex-box">
                                            <div className="rs-header-topber-contact">
                                                <ul>
                                                    <li>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                            <path d="M11 17.9381C7.05369 17.446 4 14.0796 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.0796 16.9463 17.446 13 17.9381V20.0116C16.9463 20.1039 20 20.7351 20 21.5C20 22.3284 16.4183 23 12 23C7.58172 23 4 22.3284 4 21.5C4 20.7351 7.05369 20.1039 11 20.0116V17.9381ZM12 16C15.3137 16 18 13.3137 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 13.3137 8.68629 16 12 16ZM12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12Z" fill="#000"></path>
                                                        </svg>
                                                        <span>H.No.7-1-213/B,Near SR Nagar Police Station, Ameerpet, Hyderabad, Telangana 500016</span>
                                                    </li>
                                                    <li>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                                            <path d="M16 12.3687C15.9987 12.5597 15.9223 12.7425 15.7873 12.8777C15.6523 13.0128 15.4695 13.0894 15.2785 13.0909H2.176C1.98459 13.0907 1.80109 13.0145 1.66581 12.8791C1.53053 12.7437 1.45455 12.5601 1.45455 12.3687V11.6364H14.5455V3.12727L8.72727 8.36364L1.45455 1.81818V0.727273C1.45455 0.534388 1.53117 0.349403 1.66756 0.213013C1.80395 0.0766231 1.98893 0 2.18182 0H15.2727C15.4656 0 15.6506 0.0766231 15.787 0.213013C15.9234 0.349403 16 0.534388 16 0.727273V12.3687ZM3.22473 1.45455L8.72727 6.40727L14.2298 1.45455H3.22473ZM0 8.72727H5.81818V10.1818H0V8.72727ZM0 5.09091H3.63636V6.54545H0V5.09091Z" fill="#1A73E9"></path>
                                                        </svg>
                                                        <span>Email: <Link to="mailto:info@example.com">pyramiditsolutionspvtltd@gmail.com</Link></span>
                                                    </li>
                                                    <li>
                                                       
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="rs-header-topber-social">
                                                <span>Follow Us :</span>
                                                <ul>
                                                    <li><Link to="#"><i className="ri-facebook-fill" size={20} /></Link></li>
                                                    <li><Link to="#"><i className="ri-twitter-fill" size={20} /></Link></li>
                                                    <li><Link to="#"><i className="ri-linkedin-fill" size={20} /></Link></li>
                                                    <li><Link to="#"><i className="ri-pinterest-fill" size={20} /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    )}
                    */}

                    {layout === 'rs-header-layout-3' && (
                        <div className="rs-header-topber">
                            <div className='container-fluid'>
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <div className="topbar-left-content">
                                            <p><i className="ri-hand-heart-fill"></i> Welcome to Pyramid IT Solutions. <Link to="/contact">Contact <i className="ri-arrow-right-up-line"></i></Link></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="topbar-social">
                                            <ul>
                                                <li><Link to="#">Facebook</Link></li>
                                                <li><Link to="#">Twitter</Link></li>
                                                <li><Link to="#">Instagram</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className={isVisible ? 'menu-area menu-sticky sticky' : 'menu-area menu-sticky'}>
                        <div className={container ? container : 'container'}>
                            <div className="rs-menu-area">
                                <div className="logo-area">
                                    <Link to="/"><img src={normalLogo ? normalLogo : defaultLightLogo} alt="Techzen Logo" /></Link>
                                    <Link to="/"><img src={stickyLogo ? stickyLogo : defaultLightLogo} alt="Techzen Logo" /></Link>
                                </div>
                                <div className="rs-header-rightside">
                                    <div className="main-menu hidden-md">
                                        <ul className='nav-menu'>
                                            
                                            {isOnepage ? (
                                                <MenuItemsSingle />
                                            ) : (
                                                <MenuItems
                                                    firstLvlMenu={firstLvlMenu}
                                                    secondLvlMenu={secondLvlMenu}
                                                />
                                            )}
                                        </ul>
                                    </div>

                                    <div className="rs-search-box">
                                        <div className={`search_icons ${isSearchOpen ? 'open_add_class' : ''}`}>
                                            {
                                                !isSearchOpen ?
                                                    <i className="ri-search-line" onClick={handleToggleSearch}></i> :
                                                    <i className="ri-close-line" onClick={handleToggleSearch}></i>  
                                            }
                                            <div className='sticky_form'>
                                                <form role="search" className="bs-search search-form" onSubmit={handleSearchSubmit}>
                                                    <div className="search-wrap" style={{position: 'relative'}}>
                                                        <label className="screen-reader-text active">Search for:</label>
                                                        <input
                                                            type="search"
                                                            placeholder="Search services..."
                                                            name="s"
                                                            className="search-input"
                                                            value={searchQuery}
                                                            onChange={handleChange}
                                                            autoComplete="off"
                                                        />
                                                        <button type="submit" value="Search" aria-label="Search">
                                                            <i className="ri-search-line" />
                                                        </button>
                                                        
                                                        {/* Search Results Dropdown */}
                                                        {showResults && searchResults.length > 0 && (
                                                            <div style={{
                                                                position: 'absolute',
                                                                top: '100%',
                                                                left: 0,
                                                                right: 0,
                                                                backgroundColor: 'white',
                                                                border: '1px solid #e0e0e0',
                                                                borderRadius: '8px',
                                                                marginTop: '8px',
                                                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                                                zIndex: 9999,
                                                                maxHeight: '400px',
                                                                overflowY: 'auto'
                                                            }}>
                                                                {searchResults.map((result, index) => (
                                                                    <div
                                                                        key={index}
                                                                        onClick={() => handleResultClick(result.link)}
                                                                        style={{
                                                                            padding: '12px 16px',
                                                                            borderBottom: index < searchResults.length - 1 ? '1px solid #f0f0f0' : 'none',
                                                                            cursor: 'pointer',
                                                                            transition: 'background-color 0.2s'
                                                                        }}
                                                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                                                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                                                                    >
                                                                        <div style={{
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'space-between'
                                                                        }}>
                                                                            <div style={{flex: 1}}>
                                                                                <div style={{
                                                                                    fontWeight: '600',
                                                                                    color: '#333',
                                                                                    marginBottom: '4px',
                                                                                    fontSize: '14px'
                                                                                }}>
                                                                                    {result.title}
                                                                                </div>
                                                                                <div style={{
                                                                                    fontSize: '12px',
                                                                                    color: '#666',
                                                                                    overflow: 'hidden',
                                                                                    textOverflow: 'ellipsis',
                                                                                    whiteSpace: 'nowrap'
                                                                                }}>
                                                                                    {result.description}
                                                                                </div>
                                                                            </div>
                                                                            <span style={{
                                                                                fontSize: '11px',
                                                                                color: '#F26F20',
                                                                                fontWeight: '500',
                                                                                marginLeft: '12px',
                                                                                padding: '2px 8px',
                                                                                backgroundColor: '#fff8f5',
                                                                                borderRadius: '4px'
                                                                            }}>
                                                                                {result.type}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                        
                                                        {/* No Results Message */}
                                                        {showResults && searchResults.length === 0 && searchQuery.trim() && (
                                                            <div style={{
                                                                position: 'absolute',
                                                                top: '100%',
                                                                left: 0,
                                                                right: 0,
                                                                backgroundColor: 'white',
                                                                border: '1px solid #e0e0e0',
                                                                borderRadius: '8px',
                                                                marginTop: '8px',
                                                                padding: '16px',
                                                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                                                zIndex: 9999,
                                                                textAlign: 'center',
                                                                color: '#666',
                                                                fontSize: '14px'
                                                            }}>
                                                                No results found for "{searchQuery}"
                                                            </div>
                                                        )}
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    {layout === 'rs-header-layout-3' ? (
                                        <div className="rs-header-contct">
                                            <Link to="tel:+85526691234">
                                                <p><img src={`${phone ? phone : ''}`} alt="Phone Icon" /><span>Call any time</span> +040 4200 3912</p>
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="header-btn">
                                            <Link className="main-btn" to="/contact">Get a Quote <i className="ri-arrow-right-fill" /></Link>
                                        </div>
                                    )}

                                    <div className="canvasmenu-trigger view-md">
                                        <i className="ri-menu-2-line" onClick={handleToggle}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <MobileMenu
                canvasLogo={canvasLogo ? canvasLogo : defaultDarkLogo}
                isOnepage={isOnepage}
            />
        </>
    );
};

Navbar.propTypes = {
    normalLogo: PropTypes.string,
    stickyLogo: PropTypes.string,
    canvasLogo: PropTypes.string,
    layout: PropTypes.string,
    phone: PropTypes.string,
    container: PropTypes.string,
    firstLvlMenu: PropTypes.string,
    secondLvlMenu: PropTypes.string,
    isOnepage: PropTypes.bool
};

export default Navbar;
