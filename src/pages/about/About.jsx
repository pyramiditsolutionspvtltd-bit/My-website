import React from 'react';
import Navbar from '../../layout/Navbar';
import AboutPage_About from '../../Components/AboutPage_About';
import about_image from '../../assets/images/about/about-image.png';
import count_down_experience_icon from '../../assets/images/about/count-down-experience-icon.svg';
import heart_pulse_rate_orange_2 from '../../assets/images/heart-pulse-rate-orange-2.svg';
import heart_pulse_rate_orange from '../../assets/images/heart-pulse-rate-orange.svg';
import Features from '../../Components/Features';
import featured_thumb_1 from '../../assets/images/featured/featured-thumb-1.png';
import features_icon_1 from '../../assets/images/featured/features-icon-1.png';
import featured_thumb_2 from '../../assets/images/featured/featured-thumb-2.png';
import features_icon_2 from '../../assets/images/featured/features-icon-2.png';
import featured_thumb_3 from '../../assets/images/featured/featured-thumb-3.png';
import features_icon_3 from '../../assets/images/featured/features-icon-3.png';
import WhyChoose from '../../Components/whyChoose';
import chose_right_left from '../../assets/images/why-choose/chose-right-left.jpg';
import chose_right_right from '../../assets/images/why-choose/chose-right-right.jpg';
import chose_right_bottom from '../../assets/images/why-choose/chose-right-bottom.png';
import counter_icon_1 from '../../assets/images/counter/counter-icon-1.svg'
import counter_icon_2 from '../../assets/images/counter/counter-icon-2.svg'
import counter_icon_3 from '../../assets/images/counter/counter-icon-3.svg'
import counter_icon_4 from '../../assets/images/counter/counter-icon-4.svg'
import Testimonial from '../../Components/Testimonial';
import testimonial_left_img from '../../assets/images/testimonial/testimonial-left-img.jpg';
import quote_orange from '../../assets/images/testimonial/quote_orange.svg';
import testi1 from '../../assets/images/testimonial/testi1.jpg';
import testimonial_brsnd_2 from '../../assets/images/testimonial/testimonial-brsnd-2.png';
import testi2 from '../../assets/images/testimonial/testi2.jpg';
import testi3 from '../../assets/images/testimonial/testi3.jpg';
import testi4 from '../../assets/images/testimonial/testi4.jpg';
import testi5 from '../../assets/images/testimonial/testi5.jpg';
import Brand from '../../Components/Brand';
import partner1 from '../../assets/images/brand/partner1.png';
import partner_white_1 from '../../assets/images/brand/partner-white-1.png';
import partner2 from '../../assets/images/brand/partner2.png';
import partner_white_2 from '../../assets/images/brand/partner-white-2.png';
import partner3 from '../../assets/images/brand/partner3.png';
import partner_white_3 from '../../assets/images/brand/partner-white-3.png';
import partner4 from '../../assets/images/brand/partner4.png';
import partner_white_4 from '../../assets/images/brand/partner-white-4.png';
import partner5 from '../../assets/images/brand/partner5.png';
import partner_white_5 from '../../assets/images/brand/partner-white-5.png';
import partner6 from '../../assets/images/brand/partner6.png';
import partner_white_6 from '../../assets/images/brand/partner-white-6.png';
import partner7 from '../../assets/images/brand/partner7.png';
import partner_white_7 from '../../assets/images/brand/partner-white-7.png';
import partner8 from '../../assets/images/brand/partner8.png';
import partner_white_8 from '../../assets/images/brand/partner-white-8.png';
import Footer from '../../layout/Footer';
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';
import Common_Banner from '../../Components/Common_Banner';
import Home1and2Counter from '../../Components/Home1and2Counter';

const About = () => {
    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
            />
            <Common_Banner pageName={'About'} />
            <AboutPage_About
                about_image={about_image}
                count_down_experience_icon={count_down_experience_icon}
                heart_pulse_rate_orange_2={heart_pulse_rate_orange_2}
                heart_pulse_rate_orange={heart_pulse_rate_orange}
            />
            <Features
                heart_pulse_rate_orange_2={heart_pulse_rate_orange_2}
                heart_pulse_rate_orange={heart_pulse_rate_orange}
                featured_thumb_1={featured_thumb_1}
                features_icon_1={features_icon_1}
                featured_thumb_2={featured_thumb_2}
                features_icon_2={features_icon_2}
                featured_thumb_3={featured_thumb_3}
                features_icon_3={features_icon_3}
            />
            <WhyChoose
                heart_pulse_rate_orange_2={heart_pulse_rate_orange_2}
                heart_pulse_rate_orange={heart_pulse_rate_orange}
                chose_right_left={chose_right_left}
                chose_right_right={chose_right_right}
                chose_right_bottom={chose_right_bottom}
                spacingClass={'pt-120 pb-85 md-pt-80'}
            />
            <Home1and2Counter
                counter_icon_1={counter_icon_1}
                counter_icon_2={counter_icon_2}
                counter_icon_3={counter_icon_3}
                counter_icon_4={counter_icon_4}
                showSecTitle={true}
            />
            <Testimonial
                heart_pulse_rate_orange_2={heart_pulse_rate_orange_2}
                heart_pulse_rate_orange={heart_pulse_rate_orange}
                quote_orange={quote_orange}
                testi1={testi1}
                testi2={testi2}
                testi3={testi3}
                testi4={testi4}
                testi5={testi5}
                testimonial_left_img={testimonial_left_img}
                testimonial_brsnd_2={testimonial_brsnd_2}
                passClass={'pt-110 pb-120 md-pb-50'}
            />
            <Brand
                heart_pulse_rate_orange_2={heart_pulse_rate_orange_2}
                heart_pulse_rate_orange={heart_pulse_rate_orange}
                partner1={partner1}
                partner_white_1={partner_white_1}
                partner2={partner2}
                partner_white_2={partner_white_2}
                partner3={partner3}
                partner_white_3={partner_white_3}
                partner4={partner4}
                partner_white_4={partner_white_4}
                partner5={partner5}
                partner_white_5={partner_white_5}
                partner6={partner6}
                partner_white_6={partner_white_6}
                partner7={partner7}
                partner_white_7={partner_white_7}
                partner8={partner8}
                partner_white_8={partner_white_8}
                sectitlecls = {'sm-pt-80'}
            />
            <Footer
                info_3={info_3}
                info_1={info_1}
                info_2={info_2}
            />
        </>
    );
};

export default About;