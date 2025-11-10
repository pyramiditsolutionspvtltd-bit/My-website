import React from 'react';
import Navbar from '../../layout/Navbar';
import Common_Banner from '../../Components/Common_Banner';
import Footer from '../../layout/Footer';
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';
import faq_left_img from '../../assets/images/faq/faq-left-img.png'
import FaqContent from '../../Components/FaqContent';
import FaqContact from '../../Components/FaqContact';
import heart_pulse_rate_orange_2 from '../../assets/images/heart-pulse-rate-orange-2.svg';
import heart_pulse_rate_orange from '../../assets/images/heart-pulse-rate-orange.svg';
import contact_man from '../../assets/images/contact/contact-man.png';
import contact_image02 from '../../assets/images/contact/contact-image02.png';
import circle_plus from '../../assets/images/contact/circle-plus.svg';
import contact_arrow_right from '../../assets/images/contact/contact_arrow_right.png';

const Faq = () => {
    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
                firstLvlMenu='pages'
            />
            <Common_Banner
                pageName={'FAQ'}
            />
            <FaqContent
                faq_left_img={faq_left_img}
            />
            <FaqContact
                heart_pulse_rate_orange_2={heart_pulse_rate_orange_2}
                heart_pulse_rate_orange={heart_pulse_rate_orange}
                contact_man={contact_man}
                contact_image02={contact_image02}
                circle_plus={circle_plus}
                contact_arrow_right={contact_arrow_right}
            />
            <Footer
                info_3={info_3}
                info_1={info_1}
                info_2={info_2}
            />
        </>
    );
};

export default Faq;