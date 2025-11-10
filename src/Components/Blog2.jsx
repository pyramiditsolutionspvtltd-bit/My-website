import React from 'react';
import { Link } from 'react-router-dom';

const Blog2 = ({ t_logo, blog_main1, blog_main2, blog_main3 }) => {
    return (
        <div id="rs-blog" className="rs-blog-3 pt-115 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-2">
                            <span><img src={t_logo} alt="" /> News & Blog</span>
                            <h2 className="title split-in-fade">Explore blogs and News</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="rs-blog-3__left-blog">
                            <div className="rs-blog-3__thumb">
                                <img src={blog_main1} alt="" />
                                <div className="rs-category">
                                    <i className="ri-price-tag-3-line"></i> <Link to="#">Technology</Link>
                                </div>
                            </div>
                            <div className="rs-blog-3__content">
                                <ul>
                                    <li><Link to="#"><i className="ri-user-3-line"></i> Posted By - Pyramid IT Solutions</Link></li>
                                    <li><i className="ri-calendar-line"></i> 15 / 03 / 2023</li>
                                </ul>
                                <h3 className="title"><Link to="/blog-single">10 Top Machine Learning Platforms In 2023</Link></h3>
                                <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators...</p>
                                <Link to="/blog-single">Read More <i className="ri-arrow-right-fill"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="rs-blog-3__left-blog right-blog">
                            <div className="rs-blog-3__thumb">
                                <img src={blog_main3} alt="" />
                                <div className="rs-category">
                                    <i className="ri-price-tag-3-line"></i> <Link to="#">Digital</Link>
                                </div>
                            </div>
                            <div className="rs-blog-3__content">
                                <ul>
                                    <li><Link to="#"><i className="ri-user-3-line"></i> Posted By - Pyramid IT Solutions</Link></li>
                                    <li><i className="ri-calendar-line"></i> 15 / 03 / 2023</li>
                                </ul>
                                <h3 className="title"><Link to="/blog-single">Top crypto exchange influencers in china</Link></h3>
                                <Link to="/blog-single">Read More <i className="ri-arrow-right-fill"></i></Link>
                            </div>
                        </div>
                        <div className="rs-blog-3__left-blog right-blog ">
                            <div className="rs-blog-3__thumb">
                                <img src={blog_main2} alt="" />
                                <div className="rs-category">
                                    <i className="ri-price-tag-3-line"></i> <Link to="#">Digital</Link>
                                </div>
                            </div>
                            <div className="rs-blog-3__content">
                                <ul>
                                    <li><Link to="#"><i className="ri-user-3-line"></i> Posted By - Pyramid IT Solutions</Link></li>
                                    <li><i className="ri-calendar-line"></i> 15 / 03 / 2023</li>
                                </ul>
                                <h3 className="title"><Link to="/blog-single">Top crypto exchange influencers in china</Link></h3>
                                <Link to="/blog-single">Read More <i className="ri-arrow-right-fill"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog2;