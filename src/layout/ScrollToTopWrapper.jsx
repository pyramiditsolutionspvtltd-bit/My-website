import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopWrapper = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top when location changes
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [location.pathname]);

    return children;
};

export default ScrollToTopWrapper;