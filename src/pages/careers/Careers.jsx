import React from 'react';
import Navbar from '../../layout/Navbar';
import Common_Banner from '../../Components/Common_Banner';
import CareersContent from '../../Components/CareersContent';
import Footer from '../../layout/Footer';

// Import assets
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';
import info_3 from '../../assets/images/footer/info-3.png';

const Careers = () => {
    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
                firstLvlMenu='careers'
            />
            <Common_Banner 
                pageName={'Careers'} 
            />
            <CareersContent />
            <Footer
                info_1={info_1}
                info_2={info_2}
                info_3={info_3}
            />
        </>
    );
};

export default Careers;