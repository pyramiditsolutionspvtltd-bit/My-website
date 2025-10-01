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
    const categories = [
        { link1: 'Application', link1Url: '/blog-single' },
        { link1: 'Cyber', link1Url: '/blog-single' },
        { link1: 'Design', link1Url: '/blog-single' },
        { link1: 'Digital', link1Url: '/blog-single' },
        { link1: 'Software', link1Url: '/blog-single' },
        { link1: 'Technology', link1Url: '/blog-single' },
    ];

    const tags = [
        { link1: 'App', link1Url: '#' },
        { link1: 'Consulting', link1Url: '#' },
        { link1: 'Cyber', link1Url: '#' },
        { link1: 'Design', link1Url: '#' },
        { link1: 'Development', link1Url: '#' },
        { link1: 'Digital', link1Url: '#' },
        { link1: 'Software', link1Url: '#' },
        { link1: 'Technology', link1Url: '#' },
    ];

    const socialTags = [
        { link1: '#', icon: 'ri-facebook-fill' },
        { link1: '#', icon: 'ri-twitter-x-fill' },
        { link1: '#', icon: 'ri-pinterest-line' },
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
                                                <li><i className="ri-calendar-line"></i> March 17, 2023</li>
                                                <li><Link to="#"><i className="ri-price-tag-3-line"></i> Design</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="rs-content">
                                        <h2 className="title"><Link to="/blog-single">10 reliable sources to learn about it solution</Link></h2>
                                        <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball...</p>
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
                                                <li><i className="ri-calendar-line"></i> March 17, 2023</li>
                                                <li><Link to="#"><i className="ri-price-tag-3-line"></i> Design</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="rs-content">
                                        <h2 className="title"><Link to="/blog-single">How do you become a graphic designer?</Link></h2>
                                        <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball...</p>
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
                                                <li><i className="ri-calendar-line"></i> March 17, 2023</li>
                                                <li><Link to="#"><i className="ri-price-tag-3-line"></i> Design</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="rs-content">
                                        <h2 className="title"><Link to="/blog-single">Simple guidance for you in web development</Link></h2>
                                        <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball...</p>
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
                                <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality.</p>
                                <p className="mt-20">Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail.</p>
                                <h2 className="title mt-45 pb-20">Our personal approach</h2>
                                <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail.</p>
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
                                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from. Nanotechnology immersion along the information.</p>
                                <div className="rs-quote-text">
                                    <p>“Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior.”</p>
                                    <span><span>- Jhon Henry</span>, CEO at Notero JSC </span>
                                </div>
                                <div className="rs-play">
                                    <img src={blog_single_play} alt="" />
                                    <div className="play-icon">
                                        <Link className='rs-popup-videos' to='#' onClick={openVideoPopup}>
                                            <i className="ri-play-fill"></i>
                                        </Link>
                                    </div>
                                </div>
                                <h3 className="title mt-30 mb-20">Provide exclusive solutions</h3>
                                <p>Podcasting operational change management inside of workflows to establish a framework, Taking seamless key performance indicators offline.</p>
                                <ul>
                                    <li><i className="ri-share-forward-fill"></i> Everything in your industry that happens text with their software passage</li>
                                    <li><i className="ri-share-forward-fill"></i> Distribution patterns may not be as critical the text with their software</li>
                                    <li><i className="ri-share-forward-fill"></i> Analysis is part of good management history of lorem ipsum the text with their</li>
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
                                            <h5 className="title"><Link to="/blog-single">10 reliable sources to learn about it solution</Link></h5>
                                            <span><i className="ri-calendar-line"></i> March 21, 2023 </span>
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
