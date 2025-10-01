import React from 'react';
import Navbar from '../../layout/Navbar';
import Common_Banner from '../../Components/Common_Banner';
import Project_Details from '../../Components/Project_Details';
import project_details_thumb from '../../assets/images/project/project-details-thumb.jpg';
import dingle_dual_image_first from '../../assets/images/project/dingle-dual-image-first.jpg';
import dingle_dual_image_last from '../../assets/images/project/dingle-dual-image-last.jpg';
import project_sidebar_icon_1 from '../../assets/images/project/project-sidebar-icon-1.png';
import project_sidebar_icon_2 from '../../assets/images/project/project-sidebar-icon-2.png';
import project_sidebar_icon_3 from '../../assets/images/project/project-sidebar-icon-3.png';
import project_sidebar_icon_4 from '../../assets/images/project/project-sidebar-icon-4.png';
import project_sidebar_icon_5 from '../../assets/images/project/project-sidebar-icon-5.png';
import project_sidebar_icon_6 from '../../assets/images/project/project-sidebar-icon-6.png';
import phone_white from '../../assets/images/project/phone-white.png';
import ProjectCTA from '../../Components/ProjectCTA';
import call_to_action_man from '../../assets/images/project/call_to_action_man.png';
import Footer from '../../layout/Footer';
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';

const ProjectDetails = () => {
    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
                firstLvlMenu='pages'
            />
            <Common_Banner
                pageName={'Project Details'}
            />
            <Project_Details
                project_details_thumb={project_details_thumb}
                dingle_dual_image_first={dingle_dual_image_first}
                dingle_dual_image_last={dingle_dual_image_last}
                project_sidebar_icon_1={project_sidebar_icon_1}
                project_sidebar_icon_2={project_sidebar_icon_2}
                project_sidebar_icon_3={project_sidebar_icon_3}
                project_sidebar_icon_4={project_sidebar_icon_4}
                project_sidebar_icon_5={project_sidebar_icon_5}
                project_sidebar_icon_6={project_sidebar_icon_6}
                phone_white={phone_white}
            />
            <ProjectCTA
                call_to_action_man={call_to_action_man}
                passClass={'rs-project-cta-box'}
            />
            <Footer
                info_3={info_3}
                info_1={info_1}
                info_2={info_2}
            />
        </>
    );
};

export default ProjectDetails;