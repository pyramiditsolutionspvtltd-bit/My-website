import React from 'react';
import { Link } from 'react-router-dom';

const Home3Feature = ({ mobile, heart_pulse_rate_white, android, apple, flutter, react, kotlin, desktop, php, wordpress, drupal, cakephp, laravel, ecommerce_basket, magento, big_commerce, ubercart, prettershop, virtumart }) => {
    const list1 = [
        { name: 'Android App', image: android },
        { name: 'iOS App', image: apple },
        { name: 'Flutter', image: flutter },
        { name: 'React Native', image: react },
        { name: 'Kotlin', image: kotlin },
    ];
    const list2 = [
        { name: 'PHP', image: php },
        { name: 'Wordpress', image: wordpress },
        { name: 'Drupal', image: drupal },
        { name: 'CakePHP', image: cakephp },
        { name: 'Laravel', image: laravel },
    ];
    const list3 = [
        { name: 'Magento', image: magento },
        { name: 'BigCommerce', image: big_commerce },
        { name: 'Ubercart', image: ubercart },
        { name: 'Prettershop', image: prettershop },
        { name: 'Virtumart', image: virtumart },
    ];
    return (
        <div id="rs-service" className="rs-featured pt-115 pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="rs-section-title">
                            <div className="top-sub-heading">
                                <img src={heart_pulse_rate_white} alt="icon" />
                                <span>Featured Services</span>
                                <img src={heart_pulse_rate_white} alt="icon" />
                            </div>
                            <h2 className="title split-in-fade">We provide advanced <span className="color">solutions to growing</span> your online business.</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-featured__btn">
                            <Link className="main-btn" to="/services"> View All Services <i className="ri-arrow-right-fill"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="rs-featured__item">
                            <div className="rs-featured__icon">
                                <img width="40" src={mobile} alt="" />
                                <h4 className="title">App  Development</h4>
                            </div>
                            <div className="rs-featured__list-box">
                                <ul>
                                    {
                                        list1 && list1.map((list, index) => {
                                            return (
                                                <li key={index}>
                                                    <div className="icon">
                                                        <img src={list.image} alt="" />
                                                    </div>
                                                    <Link to="/service-details-3">{list.name}</Link>
                                                </li>)
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="rs-featured__item">
                            <div className="rs-featured__icon">
                                <img width="70" src={desktop} alt="" />
                                <h4 className="title">Web  Development</h4>
                            </div>
                            <div className="rs-featured__list-box">
                                <ul>
                                    {
                                        list2 && list2.map((list, index) => {
                                            return (
                                                <li key={index}>
                                                    <div className="icon">
                                                        <img src={list.image} alt="" />
                                                    </div>
                                                    <Link to="/service-details-3">{list.name}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="rs-featured__item">
                            <div className="rs-featured__icon">
                                <img width="70" src={ecommerce_basket} alt="" />
                                <h4 className="title">Ecommerce  Development</h4>
                            </div>
                            <div className="rs-featured__list-box">
                                <ul>
                                    {
                                        list3 && list3.map((list, index) => {
                                            return (
                                                <li key={index}>
                                                    <div className="icon">
                                                        <img src={list.image} alt="" />
                                                    </div>
                                                    <Link to="/service-details-3">{list.name}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home3Feature;