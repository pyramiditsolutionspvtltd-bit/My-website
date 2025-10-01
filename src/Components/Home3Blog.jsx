import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home3Blog = ({ heart_pulse_rate_orange_2, heart_pulse_rate_orange, blog1, blog2, testi1 }) => {
    const blogs = [
        { image1: blog1, link1: 'Application', link1URL: '#', link2: 'Tips to help you build your social media', link2URL: '/blog-single', date: 'Mar 16, 2023', time: '8 min read', details: 'Podcasting operational change management inside of workflows to establish a...', image2: testi1, link3: 'Read Post', link3URL: '/blog-single' },
        { image1: blog2, link1: 'Technology', link1URL: '#', link2: 'Tips to help you build your social media', link2URL: '/blog-single', date: 'Mar 16, 2023', time: '8 min read', details: 'Podcasting operational change management inside of workflows to establish a...', image2: testi1, link3: 'Read Post', link3URL: '/blog-single' },
        { image1: blog1, link1: 'Performance', link1URL: '#', link2: 'Tips to help you build your social media', link2URL: '/blog-single', date: 'Mar 16, 2023', time: '8 min read', details: 'Podcasting operational change management inside of workflows to establish a...', image2: testi1, link3: 'Read Post', link3URL: '/blog-single' },
    ]
    return (
        <div id="rs-blog" className="rs-blog pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="rs-section-title black">
                            <div className="top-sub-heading">
                                <img src={heart_pulse_rate_orange_2} alt="icon" />
                                <span>Recent News</span>
                                <img src={heart_pulse_rate_orange} alt="icon" />
                            </div>
                            <h2 className="title split-in-fade">Our insights on trends, Technologies and Transformation</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        blogs && blogs.map((blog, index) => {
                            return (
                                <div key={index} className="col-lg-4">
                                    <div className="rs-blog__single">
                                        <div className="thumb">
                                            <img src={blog.image1} alt="" />
                                            <div className="rs-contact-icon">
                                                <Link to="#"><svg width="14" height="16" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.70371 13.1768L7.90054e-06 14L0.823208 10.2963C0.28108 9.28226 -0.00172329 8.14985 7.90054e-06 7C7.90054e-06 3.1339 3.13391 0 7 0C10.8661 0 14 3.1339 14 7C14 10.8661 10.8661 14 7 14C5.85015 14.0017 4.71774 13.7189 3.70371 13.1768Z" fill="white"></path>
                                                </svg></Link>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="rs-blog-category">
                                                <Link to={blog.link1URL}>
                                                    <div className="icon"></div>{blog.link1}
                                                </Link>
                                            </div>
                                            <h3 className="title">
                                                <Link to={blog.link2URL}>{blog.link2}</Link>
                                            </h3>
                                            <ul>
                                                <li>{blog.date}</li>
                                                <li>
                                                    <div className="rs-icon"></div> {blog.time}
                                                </li>
                                            </ul>
                                            <p>{blog.details}</p>
                                            <div className="rs-blog-author">
                                                <div className="user">
                                                    <Link to={blog.link1URL}>
                                                        <div className="author-thumb">
                                                            <img src={blog.image2} alt="" />
                                                        </div>
                                                        <span>by pyramid IT Solutions</span>
                                                    </Link>
                                                </div>
                                                <div className="rs-link">
                                                    <Link to={blog.link3URL}>{blog.link3} <i className="ri-arrow-right-fill"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="rs-blog__btn">
                    <Link className="main-btn" to="/blog-standard">View All Blog <i className="ri-arrow-right-fill"></i></Link>
                </div>
            </div>
        </div>
    );
};

Home3Blog.propTypes = {
    heart_pulse_rate_orange_2: PropTypes.string,
    heart_pulse_rate_orange: PropTypes.string,
    blog1: PropTypes.string,
    blog2: PropTypes.string,
    testi1: PropTypes.string,
};

export default Home3Blog;