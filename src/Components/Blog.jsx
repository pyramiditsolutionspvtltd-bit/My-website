/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

const Blog = ({ heart_pulse_rate_orange_2, heart_pulse_rate_orange, blog_6, blog_8, blog_5, blog_4, blog_7, previewPhone, previewPhoneExt, previewSM, previewMd, preview }) => {
    const blogs = [
        { image: blog_6, linkURL1: '#', title1: 'Software', title2: '10 reliable sources to learn about it solution', details: 'Podcasting operational change management inside of workflows to establish a...', linkURL3: 'blog-single', title3: 'Read More', linkURL2: 'blog-single' },
        { image: blog_8, linkURL1: '#', title1: 'Design', title2: '10 reliable sources to learn about it solution', details: 'Podcasting operational change management inside of workflows to establish a...', linkURL3: 'blog-single', title3: 'Read More', linkURL2: 'blog-single' },
        { image: blog_5, linkURL1: '#', title1: 'Development', title2: '10 reliable sources to learn about it solution', details: 'Podcasting operational change management inside of workflows to establish a...', linkURL3: 'blog-single', title3: 'Read More', linkURL2: 'blog-single' },
        { image: blog_4, linkURL1: '#', title1: 'UI/UX', title2: '10 reliable sources to learn about it solution', details: 'Podcasting operational change management inside of workflows to establish a...', linkURL3: 'blog-single', title3: 'Read More', linkURL2: 'blog-single' },
        { image: blog_7, linkURL1: '#', title1: 'Design', title2: '10 reliable sources to learn about it solution', details: 'Podcasting operational change management inside of workflows to establish a...', linkURL3: 'blog-single', title3: 'Read More', linkURL2: 'blog-single' },
    ]
    return (
        <div id="rs-blog" className="rs-blog-2 pt-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-section-title black">
                            <div className="top-sub-heading">
                                <img src={heart_pulse_rate_orange_2} alt="icon" />
                                <span>News & Article</span>
                                <img src={heart_pulse_rate_orange} alt="icon" />
                            </div>
                            <h2 className="title split-in-fade">Read our latest insights</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper className="rs-carousel owl-carousel nav-style1" data-loop="true" data-items="3" data-margin="20" data-autoplay="true" data-hoverpause="true" data-autoplay-timeout="5000" data-smart-speed="800" data-dots="true" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="true" data-ipad-device="2" data-ipad-device-nav="false" data-ipad-device-dots="true" data-ipad-device2="2" data-ipad-device-nav2="false" data-ipad-device-dots2="true" data-md-device="2" data-lg-device="3" data-md-device-nav="false" data-md-device-dots="true" data-doteach="false" spaceBetween={2}
                            slidesPerView={preview || 3}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            breakpoints={{
                                0: {
                                    slidesPerView: previewPhone || 1,
                                    spaceBetween: 30,
                                },
                                576: {
                                    slidesPerView: previewPhoneExt || 1,
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerView: previewSM || 2,
                                    spaceBetween: 30,
                                },
                                992: {
                                    slidesPerView: previewMd || 2,
                                    spaceBetween: 30,
                                },
                                1200: {
                                    slidesPerView: preview || 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {
                                blogs && blogs.map((blog, index) => {
                                    return (
                                        <SwiperSlide key={index} className="rs-blog-2__item">
                                            <div className="rs-thumb">
                                                <img src={blog.image} alt="" />
                                            </div>
                                            <div className="rs-content">
                                                <div className="rs-category">
                                                    <Link to={blog.linkURL1}>{blog.title1}</Link>
                                                </div>
                                                <h3 className="title"><Link to={blog.linkURL2}>{blog.title2}</Link></h3>
                                                <p>{blog.details}</p>
                                                <div className="rs-blog-footer">
                                                    <span>
                                                        <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="M2.97 8.83317L0 11.1665V0.833171C0 0.65636 0.0702379 0.48679 0.195262 0.361766C0.320286 0.236742 0.489856 0.166504 0.666667 0.166504H10.6667C10.8435 0.166504 11.013 0.236742 11.1381 0.361766C11.2631 0.48679 11.3333 0.65636 11.3333 0.833171V8.83317H2.97ZM2.50867 7.49984H10V1.49984H1.33333V8.42317L2.50867 7.49984ZM4.66667 10.1665H11.4913L12.6667 11.0898V4.1665H13.3333C13.5101 4.1665 13.6797 4.23674 13.8047 4.36177C13.9298 4.48679 14 4.65636 14 4.83317V13.8332L11.03 11.4998H5.33333C5.15652 11.4998 4.98695 11.4296 4.86193 11.3046C4.7369 11.1796 4.66667 11.01 4.66667 10.8332V10.1665Z" fill="#F26F20"></path></svg>
                                                        2 Comments
                                                    </span>
                                                    <Link to={blog.linkURL3}>{blog.title3} <i className="ri-arrow-right-fill"></i></Link>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;