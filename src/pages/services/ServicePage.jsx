import { useParams } from 'react-router-dom';
import Navbar from '../../layout/Navbar';
import Common_Banner from '../../Components/Common_Banner';
import ServiceDetails from '../../Components/ServiceDetails';
import Footer from '../../layout/Footer';

// Import assets
import service_details_thumb_2 from '../../assets/images/service/service-details-thumb-2.jpg';
import counter_icon_1 from '../../assets/images/counter/counter-icon-1.svg';
import counter_icon_2 from '../../assets/images/counter/counter-icon-2.svg';
import counter_icon_3 from '../../assets/images/counter/counter-icon-3.svg';
import counter_icon_4 from '../../assets/images/counter/counter-icon-4.svg';
import rating_1 from '../../assets/images/testimonial/rating-1.png';
import quote_white from '../../assets/images/testimonial/quote-white.svg';
import testi1 from '../../assets/images/testimonial/testi1.jpg';
import testi2 from '../../assets/images/testimonial/testi2.jpg';
import testi3 from '../../assets/images/testimonial/testi3.jpg';
import testi4 from '../../assets/images/testimonial/testi4.jpg';
import testi5 from '../../assets/images/testimonial/testi5.jpg';
import flag_1 from '../../assets/images/testimonial/flag-1.jpg';
import flag_2 from '../../assets/images/testimonial/flag-2.jpg';
import flag_3 from '../../assets/images/testimonial/flag-3.jpg';
import flag_4 from '../../assets/images/testimonial/flag-4.jpg';
import flag_5 from '../../assets/images/testimonial/flag-5.jpg';
import info_3 from '../../assets/images/footer/info-3.png';
import info_1 from '../../assets/images/footer/info-1.png';
import info_2 from '../../assets/images/footer/info-2.png';

import { getServiceById } from '../../data/servicesData';

const ServicePage = () => {
    const { id } = useParams();
    const serviceData = getServiceById(id);
    
    // Get service title for banner, fallback to default
    const serviceTitle = serviceData ? serviceData.title : 'Service Details';

    return (
        <>
            <Navbar
                layout={'rs-header-layout2'}
                firstLvlMenu='services'
                secondLvlMenu='service-details'
            />
            <Common_Banner
                pageName={serviceTitle}
            />
            <ServiceDetails
                serviceId={id}
                service_details_thumb_2={service_details_thumb_2}
                counter_icon_1={counter_icon_1}
                counter_icon_2={counter_icon_2}
                counter_icon_3={counter_icon_3}
                counter_icon_4={counter_icon_4}
                rating_1={rating_1}
                quote_white={quote_white}
                testi1={testi1}
                testi2={testi2}
                testi3={testi3}
                testi4={testi4}
                testi5={testi5}
                flag_1={flag_1}
                flag_2={flag_2}
                flag_3={flag_3}
                flag_4={flag_4}
                flag_5={flag_5}
                mobileItems={1}
                mobileLargeItems={1}
                smItems={1}
                mdItems={1}
                items={2}
            />
            <Footer
                info_1={info_1}
                info_2={info_2}
                info_3={info_3}
            />
        </>
    );
};

export default ServicePage;