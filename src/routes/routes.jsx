import {
    BrowserRouter,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

// Scroll to Top Wrapper
import ScrollToTopWrapper from "../layout/ScrollToTopWrapper";

// Home Pages
import Home from "../pages/home/Home";

// Main Pages
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import AllServicesPage from "../pages/services/AllServicesPage";
import ServicePage from "../pages/services/ServicePage";
import ServicesDemoPage from "../pages/services/ServicesDemoPage";
import Contact from "../pages/contact/Contact";

// Blog Pages
import Blog from "../pages/blog/Blog";
import BlogSingle from "../pages/blog/BlogSingle";

// Other Pages
import OurProjects from "../pages/Page/OurProjects";
import ProjectDetails from "../pages/Page/ProjectDetails";
import Team from "../pages/Page/Team";
import TeamDetails from "../pages/Page/TeamDetails";
import Faq from "../pages/Page/Faq";
import Appointment from "../pages/Page/Appointment";

// Error Page
import Error from "../pages/Error";


const routes = () => {

    return (
        <BrowserRouter>
            <ScrollToTopWrapper>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/services' element={<Services />}/>
                    <Route path='/service/web-development' element={<Navigate to="/services" replace />}/>
                    <Route path='/service/data-analytics' element={<Navigate to="/services" replace />}/>
                    <Route path='/service/cloud-migration' element={<Navigate to="/services" replace />}/>
                    <Route path='/service/it-consulting' element={<Navigate to="/services" replace />}/>
                    <Route path='/services-demo' element={<ServicesDemoPage />}/>
                    <Route path='/all-services' element={<AllServicesPage />}/>
                    <Route path='/service/:id' element={<ServicePage />}/>
                    <Route path="/service-details" element={<Navigate to="/services" replace />}/>
                    <Route path="/service-details-2" element={<Navigate to="/services" replace />}/>
                    <Route path="/service-details-3" element={<Navigate to="/services" replace />}/>
                    <Route path="/our-projects" element={<OurProjects/>}/>
                    <Route path="/project-details" element={<ProjectDetails/>}/>
                    <Route path="/our-team" element={<Team/>}/>
                    <Route path="/team-details" element={<TeamDetails/>}/>
                    <Route path="/faq" element={<Faq/>}/>
                    <Route path="/appointment" element={<Appointment/>}/>
                    <Route path='/blog-standard' element={<Blog />}/>
                    <Route path='/blog-single' element={<BlogSingle />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='*' element={<Error />}/>
                </Routes>
            </ScrollToTopWrapper>
        </BrowserRouter>
    )
}

export default routes