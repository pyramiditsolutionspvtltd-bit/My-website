import Navbar from '../../layout/Navbar';
import Progress from '../../layout/Progress';
import Footer from '../../layout/Footer';
import ScrollToTop from '../../layout/ScrollToTop';
import Common_Banner from '../../Components/Common_Banner';
import ServicesListing from '../../Components/ServicesListing';

const Services = () => {
  return (
    <>
      <Progress />
      <Navbar />
      <Common_Banner 
        heading="Our Services" 
        page="Services" 
        pageName="Our Services"
      />
      <ServicesListing />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Services;