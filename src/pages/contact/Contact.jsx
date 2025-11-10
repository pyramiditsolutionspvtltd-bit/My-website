import React from 'react';
import ContactUs from '../../Components/ContactUs';
import Navbar from '../../layout/Navbar';
import Common_Banner from '../../Components/Common_Banner';
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
import partner9 from '../../assets/images/brand/partner9.png';
import partner10 from '../../assets/images/brand/partner10.png';
import partner11 from '../../assets/images/brand/partner11.png';
import partner_white_8 from '../../assets/images/brand/partner-white-8.png';
import heart_pulse_rate_orange_2 from '../../assets/images/heart-pulse-rate-orange-2.svg';
import heart_pulse_rate_orange from '../../assets/images/heart-pulse-rate-orange.svg';
import Footer from '../../layout/Footer';
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';
import techzen_logo_home_2 from "../../assets/images/techzen_logo_home_2.png";
import GoogleMap from '../../Components/GoogleMap';
import BrandContact from '../../Components/BrandContact';

const Contact = () => {
    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
            />
            <Common_Banner pageName={'Contact'} />
            <ContactUs />
            <BrandContact
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
                partner9={partner9}
                partner10={partner10}
                partner11={partner11}
                partner_white_8={partner_white_8}
            />
            <GoogleMap />
            <Footer
                info_3={info_3}
                info_1={info_1}
                info_2={info_2}
                techzen_logo_home_2={techzen_logo_home_2}
            />
        </>
    );
};

export default Contact;