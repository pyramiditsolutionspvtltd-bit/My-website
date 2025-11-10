import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPopup from '../layout/VideoPopUp';

const BlogSingle_Standerd = ({
    column_blog_7,
    blog_single_thumb_1,
    blog_single_thumb_2,
    blog_single_play,
    side_blog_1,
    side_blog_2,
    side_blog_3,
    side_blog_4,
    side_blog_5,
    standaed_thumb_1,
    standaed_thumb_2,
    standaed_thumb_3,
    passClass
}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [isVideoOpen, setVideoOpen] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null); // Track submission status

    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    const sideColBlog = [side_blog_1, side_blog_2, side_blog_3, side_blog_4, side_blog_5];
    
    const recentPosts = [
        { title: "Network Infrastructure Modernization: Key Considerations", date: "November 05, 2025" },
        { title: "Cloud Migration Strategies for Enterprise Success", date: "November 03, 2025" },
        { title: "GPON vs Traditional Fiber: Making the Right Choice", date: "November 01, 2025" },
        { title: "IT Risk Assessment: Protecting Your Digital Assets", date: "October 28, 2025" },
        { title: "The Rise of IoT: Opportunities and Security Challenges", date: "October 25, 2025" }
    ];
    
    const categories = [
        { link1: 'IT Services', link1Url: '/blog-single' },
        { link1: 'Cybersecurity', link1Url: '/blog-single' },
        { link1: 'Cloud Computing', link1Url: '/blog-single' },
        { link1: 'Network Solutions', link1Url: '/blog-single' },
        { link1: 'Structured Cabling', link1Url: '/blog-single' },
        { link1: 'Digital Transformation', link1Url: '/blog-single' },
    ];

    const tags = [
        { link1: 'Networking', link1Url: '#' },
        { link1: 'IT Consulting', link1Url: '#' },
        { link1: 'Cybersecurity', link1Url: '#' },
        { link1: 'Cloud Migration', link1Url: '#' },
        { link1: 'Data Center', link1Url: '#' },
        { link1: 'Fiber Optics', link1Url: '#' },
        { link1: 'GPON', link1Url: '#' },
        { link1: 'IoT Solutions', link1Url: '#' },
    ];

    const socialTags = [
        { link1: '#', icon: 'ri-facebook-fill' },
        { link1: '#', icon: 'ri-twitter-x-fill' },
        { link1: '#', icon: 'ri-youtube-fill' },
    ];

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission with a success response
        setTimeout(() => {
            setSubmissionStatus('success');
            // Reset form after successful submission
            setName('');
            setEmail('');
            setComment('');
        }, 1000);
    };

    return (
        <div className="rs-blog-single-page pt-80 pb-120">
            <div className="container">
                <div className="row">
                    {passClass === 'rs-blog-standard-page' ? (
                        <div className="col-lg-8">
                            <div className="rs-blog-standard-page__box mt-40">
                                <div className="rs-blog-standard-item mb-50">
                                    <div className="rs-thumb">
                                        <Link to="/blog-single">
                                            <img src={standaed_thumb_1} alt="" />
                                        </Link>
                                        <div className="rs-meta-box">
                                            <ul>
                                                <li><i className="ri-user-3-line"></i> Pyramid IT Solutions</li>
                                                <li><i className="ri-calendar-line"></i> November 08, 2025</li>
                                                <li><Link to="#"><i className="ri-price-tag-3-line"></i> Cybersecurity</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="rs-content">
                                        <h2 className="title"><Link to="/blog-single">5 Essential Cybersecurity Best Practices for Modern Businesses</Link></h2>
                                        <p>Discover the critical cybersecurity measures every business needs to implement. From threat detection to incident response, learn how to protect your organization from evolving cyber threats with Pyramid IT Solutions comprehensive security framework...</p>
                                        <div className="rs-link">
                                            <Link className="main-btn-2" to="/blog-single">Continue Reading <i className="ri-arrow-right-fill"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="rs-blog-standard-item mb-50">
                                    <div className="rs-thumb">
                                        <Link to="/blog-single">
                                            <img src={standaed_thumb_2} alt="" />
                                        </Link>
                                        <div className="rs-meta-box">
                                            <ul>
                                                <li><i className="ri-user-3-line"></i> Pyramid IT Solutions</li>
                                                <li><i className="ri-calendar-line"></i> November 05, 2025</li>
                                                <li><Link to="#"><i className="ri-price-tag-3-line"></i> Cloud Computing</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="rs-content">
                                        <h2 className="title"><Link to="/blog-single">The Future of Cloud Computing: Hybrid and Multi-Cloud Strategies</Link></h2>
                                        <p>Explore how businesses are leveraging hybrid and multi-cloud architectures for enhanced flexibility and performance. Learn about cloud migration strategies, cost optimization, and the benefits of working with experienced cloud solution providers...</p>
                                        <div className="rs-link">
                                            <Link className="main-btn-2" to="/blog-single">Continue Reading <i className="ri-arrow-right-fill"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="rs-blog-standard-item">
                                    <div className="rs-thumb">
                                        <Link to="/blog-single">
                                            <img src={standaed_thumb_3} alt="" />
                                        </Link>
                                        <div className="rs-meta-box">
                                            <ul>
                                                <li><i className="ri-user-3-line"></i> Pyramid IT Solutions</li>
                                                <li><i className="ri-calendar-line"></i> November 02, 2025</li>
                                                <li><Link to="#"><i className="ri-price-tag-3-line"></i> Network Infrastructure</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="rs-content">
                                        <h2 className="title"><Link to="/blog-single">Structured Cabling: Building the Foundation for Future-Ready Networks</Link></h2>
                                        <p>Understanding the importance of structured cabling in modern IT infrastructure. From Cat6A installations to fiber optic solutions, discover how proper cabling design supports high-speed connectivity and scalable network performance...</p>
                                        <div className="rs-link">
                                            <Link className="main-btn-2" to="/blog-single">Continue Reading <i className="ri-arrow-right-fill"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="rs-shop-page__breadcrumb">
                                    <ul>
                                        <li><Link className="active" to="#"><span>1</span></Link></li>
                                        <li><Link to="#">2</Link></li>
                                        <li><Link to="#">3</Link></li>
                                        <li><Link to="#"><i className="ri-arrow-right-fill"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="col-lg-8">
                            <div className="rs-blog-single-page__content mt-40">
                                <div className="rs-thumb pb-45">
                                    <img src={column_blog_7} alt="" />
                                </div>
                                <p>In todays rapidly evolving digital landscape, cybersecurity has become more critical than ever. Organizations face sophisticated threats that can compromise sensitive data, disrupt operations, and damage reputation. At Pyramid IT Solutions, we understand the importance of implementing comprehensive security measures.</p>
                                <p className="mt-20">Our cybersecurity experts have compiled essential best practices that every modern business should implement to protect their digital assets and ensure business continuity.</p>
                                <h2 className="title mt-45 pb-20">Our Comprehensive Security Approach</h2>
                                <p>At Pyramid IT Solutions, we believe in a layered security approach that combines advanced technology, proper procedures, and continuous monitoring to provide maximum protection against cyber threats.</p>
                                <div className="row mb-20">
                                    <div className="col-lg-6">
                                        <div className="rs-thumb mt-20">
                                            <img style={{ borderRadius: '10px' }} src={blog_single_thumb_1} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-20">
                                        <div className="rs-thumb">
                                            <img style={{ borderRadius: '10px' }} src={blog_single_thumb_2} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <p>Our security solutions include next-generation firewalls, intrusion detection systems, vulnerability assessments, and 24/7 monitoring services. We work closely with clients to implement security policies that align with industry best practices and regulatory requirements.</p>
                                <div className="rs-quote-text">
                                    <p>"Security is not a product, but a process. At Pyramid IT Solutions, we provide continuous protection that evolves with emerging threats, ensuring our clients stay ahead of cybercriminals."</p>
                                    <span><span>- Security Team</span>, Pyramid IT Solutions</span>
                                </div>
                                <div className="rs-play">
                                    <img src={blog_single_play} alt="" />
                                    <div className="play-icon">
                                        <Link className='rs-popup-videos' to='#' onClick={openVideoPopup}>
                                            <i className="ri-play-fill"></i>
                                        </Link>
                                    </div>
                                </div>
                                <h3 className="title mt-30 mb-20">Our Cybersecurity Services Include</h3>
                                <p>Pyramid IT Solutions offers comprehensive cybersecurity services designed to protect your business from evolving threats and ensure compliance with industry standards.</p>
                                <ul>
                                    <li><i className="ri-share-forward-fill"></i> 24/7 Security Monitoring and Incident Response to detect and respond to threats in real-time</li>
                                    <li><i className="ri-share-forward-fill"></i> Vulnerability Assessment and Penetration Testing to identify and remediate security weaknesses</li>
                                    <li><i className="ri-share-forward-fill"></i> Security Information and Event Management (SIEM) for comprehensive threat intelligence and analysis</li>
                                </ul>
                                <div className="rs-form">
                                    <h3 className="title">Leave a Reply</h3>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                    <form onSubmit={handleFormSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="input-box">
                                                    <input
                                                        type="text"
                                                        placeholder="Name*"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="input-box">
                                                    <input
                                                        type="email"
                                                        placeholder="Email*"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-box">
                                                    <textarea
                                                        placeholder="Comment*"
                                                        value={comment}
                                                        onChange={(e) => setComment(e.target.value)}
                                                        required
                                                    ></textarea>
                                                    <button className="main-btn" type="submit">Post Comment</button>
                                                    {submissionStatus === 'success' && (
                                                        <p className="submission-message">Post submitted successfully!</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="col-lg-4">
                        <div className="rs-blog-standard-page__sidebar mt-40">
                            <div className="rs-blog-search rs-blog-common">
                                <form action="#">
                                    <div className="rs-search">
                                        <input type="text" placeholder="Searching..." required />
                                        <button className="main-btn" type="submit"><i className="ri-search-line"></i></button>
                                    </div>
                                </form>
                            </div>
                            <div className="rs-blog-category rs-blog-common mt-40">
                                <h4 className="rs-sidebar-title">Categories</h4>
                                <ul>
                                    {categories && categories.map((category, index) => (
                                        <li key={index}><Link to={category.link1Url}>{category.link1} <i className="ri-arrow-right-fill"></i></Link></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rs-blog-sidebar-post rs-blog-common mt-40">
                                <h4 className="rs-sidebar-title">Recent Posts</h4>
                                {sideColBlog && sideColBlog.map((item, index) => (
                                    <div key={index} className="rs-blog-sidebar-item mb-25">
                                        <div className="rs-thumb">
                                            <Link to="/blog-single"><img src={item} alt="" /></Link>
                                        </div>
                                        <div className="rs-content">
                                            <h5 className="title"><Link to="/blog-single">{recentPosts[index]?.title || "IT Solutions and Best Practices"}</Link></h5>
                                            <span><i className="ri-calendar-line"></i> {recentPosts[index]?.date || "November 2025"}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="rs-blog-tags rs-blog-common mt-40">
                                <h4 className="rs-sidebar-title">Tags</h4>
                                <ul>
                                    {tags && tags.map((tag, index) => (
                                        <li key={index}><Link to={tag.link1Url}>{tag.link1}</Link></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rs-blog-social rs-blog-common mt-40">
                                <h4 className="rs-sidebar-title">Social</h4>
                                <ul>
                                    {socialTags && socialTags.map((tag, index) => (
                                        <li key={index}><Link to={tag.link1}><i className={tag.icon}></i></Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopup isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl="https://www.youtube.com/embed/5CLmRIHR5Zw" />
        </div>
    );
};

export default BlogSingle_Standerd;
