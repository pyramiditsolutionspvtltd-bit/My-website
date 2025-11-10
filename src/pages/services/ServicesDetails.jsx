import React from 'react';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import Common_Banner from '../../Components/Common_Banner';
import ServiceDetails from '../../Components/ServiceDetails';

const ServicesDetails = () => {
    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
                firstLvlMenu='services'
                secondLvlMenu='service-details'
            />
            <Common_Banner
                pageName={'Service Details'}
            />
            <ServiceDetails />
            <Footer />
        </>
    );
};

export default ServicesDetails;