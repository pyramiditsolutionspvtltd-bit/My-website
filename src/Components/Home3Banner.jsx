import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Home3Banner = ({ heart_pulse_rate_orange_2, man_standing_laptop2, meter, rotate_img1, arrow, twist_path, banner_lady, white_shapes, white_shape, }) => {
    const data1 = [meter, white_shape, rotate_img1, rotate_img1, arrow, arrow, twist_path, twist_path];

    return (
        <div className="rs-banner">
            <Swiper className="rs-banner-slider"
                autoplay={{
                    delay: 5000,
                }}
                loop={true}
                modules={[Autoplay]}
            >
                <SwiperSlide className="items">
                    <div className="rs-banner--slider-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="rs-banner--inner-content">
                                        <h1 className="title" data-animation="fadeInDown" data-delay="0.1s">2024</h1>
                                        <div className="rs-banner__box" data-animation="fadeInLeft" data-delay="0.3s">
                                            <div className="rs-banner__image-box">
                                                <img src={heart_pulse_rate_orange_2} alt="" />
                                            </div>
                                            <span>Welcome To Techzen</span>
                                        </div>
                                        <h1 className="title-2" data-animation="fadeInLeft" data-delay="0.6s">Tech Solutions For <span className="color">Digital</span> Future</h1>
                                        <p data-animation="fadeInLeft" data-delay="0.9s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero soluta modi, libero, ratione quidem quibusdam ullam illo obcaecati </p>
                                        <Link data-animation="fadeInUp" data-delay="1.2s" className="main-btn" to="/about">Get Started <i className="ri-arrow-right-fill"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rs-banner__thumb" data-animation="fadeInUp" data-delay="1.5s">
                            <img src={man_standing_laptop2} alt="" />
                        </div>
                        {
                            data1 && data1.map((data, index) => {
                                return (
                                    <div key={index} className={`rs-banner__shape${index + 1}`}>
                                        <img src={data} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide className="items">
                    <div className="rs-banner--slider-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="rs-banner--inner-content">
                                        <h1 className="title" data-animation="fadeInDown" data-delay="0.1s">2024</h1>
                                        <div className="rs-banner__box" data-animation="fadeInLeft" data-delay="0.3s">
                                            <div className="rs-banner__image-box">
                                                <img src={heart_pulse_rate_orange_2} alt="" />
                                            </div>
                                            <span>Welcome To Techzen</span>
                                        </div>
                                        <h1 data-animation="fadeInLeft" data-delay="0.6s" className="title-2">Surfing The Waves of IT <span className="color">Innovation</span></h1>
                                        <p data-animation="fadeInLeft" data-delay="0.9s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero soluta modi, libero, ratione quidem quibusdam ullam illo obcaecati </p>
                                        <Link data-animation="fadeInUp" data-delay="1.2s" className="main-btn" to="/about">Get Started <i className="ri-arrow-right-fill"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rs-banner__thumb" data-animation="fadeInUp" data-delay="1.5s">
                            <img src={banner_lady} alt="" />
                        </div>
                        {
                            data1 && data1.map((data, index) => {
                                return (
                                    <div key={index} className={`rs-banner__shape${index + 1}`}>
                                        <img src={data} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home3Banner;