import React from 'react';
import Navbar from '../../layout/Navbar';
import Common_Banner from '../../Components/Common_Banner';
import Our_Projects from '../../Components/Our_Projects';
import portfolio_item_1 from '../../assets/images/project/portfolio-item-1.jpg';
import portfolio_item_2 from '../../assets/images/project/portfolio-item-2.jpg';
import portfolio_item_3 from '../../assets/images/project/portfolio-item-3.jpg';
import portfolio_item_4 from '../../assets/images/project/portfolio-item-4.jpg';
import portfolio_item_5 from '../../assets/images/project/portfolio-item-5.jpg';
import ProjectCTA from '../../Components/ProjectCTA';
import call_to_action_man from '../../assets/images/project/call_to_action_man.png';
import Footer from '../../layout/Footer';
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';

const OurProjects = () => {
    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
                firstLvlMenu='pages'
            />
            <Common_Banner
                pageName={'Our Projects'}
            />
            <Our_Projects
                portfolio_item_1={portfolio_item_1}
                portfolio_item_2={portfolio_item_2}
                portfolio_item_3={portfolio_item_3}
                portfolio_item_4={portfolio_item_4}
                portfolio_item_5={portfolio_item_5}
            />
            <ProjectCTA
                call_to_action_man={call_to_action_man}
                passClass={'rs-project-cta'}
            />
            <Footer
                info_3={info_3}
                info_1={info_1}
                info_2={info_2}
            />
        </>
    );
};

export default OurProjects;