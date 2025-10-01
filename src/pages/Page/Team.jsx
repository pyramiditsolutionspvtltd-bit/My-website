import React from 'react';
import Navbar from '../../layout/Navbar';
import Common_Banner from '../../Components/Common_Banner';
import Footer from '../../layout/Footer';
import OurTeam from '../../Components/OurTeam';
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';
import heart_pulse_orange2 from '../../assets/images/heart-pulse-rate-orange-2.svg';
import heart_pulse_orange from '../../assets/images/heart-pulse-rate-orange.svg';
import team_img_5 from '../../assets/images/team/team_img_5.jpg';
import team_img_1 from '../../assets/images/team/team_img_1.jpg';
import team_img_2 from '../../assets/images/team/team_img_2.jpg';
import team_img_4 from '../../assets/images/team/team_img_4.jpg';
import team_img_6 from '../../assets/images/team/team_img_6.jpg';
import team_img_7 from '../../assets/images/team/team_img_7.jpg';

const Team = () => {
    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
                firstLvlMenu='pages'
            />
            <Common_Banner
                pageName={'Team'}
            />
            <OurTeam
                heart_pulse_orange2={heart_pulse_orange2}
                heart_pulse_orange={heart_pulse_orange}
                team_img_5={team_img_5}
                team_img_1={team_img_1}
                team_img_2={team_img_2}
                team_img_4={team_img_4}
                team_img_6={team_img_6}
                team_img_7={team_img_7}
            />
            <Footer
                info_3={info_3}
                info_1={info_1}
                info_2={info_2}
            />
        </>
    );
};

export default Team;