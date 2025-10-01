import React from 'react';
import Navbar from '../../layout/Navbar';
import Common_Banner from '../../Components/Common_Banner';
import Footer from '../../layout/Footer';
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';
import Team_Details from '../../Components/Team_Details';
import team_sidebar_1 from '../../assets/images/team/team-sidebar-1.jpg';
import rect from '../../assets/images/team/rect.svg';
import shape_item from '../../assets/images/team/shape-item.png';

const TeamDetails = () => {
    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
                firstLvlMenu='pages'
            />
            <Common_Banner
                pageName={'Team Details'}
            />
            <Team_Details
                team_sidebar_1={team_sidebar_1}
                rect={rect}
                shape_item={shape_item}
            />
            <Footer
                info_3={info_3}
                info_1={info_1}
                info_2={info_2}
            />
        </>
    );
};

export default TeamDetails;