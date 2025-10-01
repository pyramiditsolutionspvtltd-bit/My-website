import React, { useState, useEffect } from "react";

const ScrollToTop = ({ scrollClassName }) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    if (isVisible) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={scrollClassName ? scrollClassName : 'scrollup'}>
      {isVisible && (
        <div onClick={scrollToTop} style={{ ...styles.button, ...(isVisible ? {} : styles.hidden) }}>
          <i className="ri-arrow-up-line" style={styles.icon}></i>
        </div>
      )}
    </div>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    width: '2.5rem',
    height: '2.5rem',
    backgroundColor: '#F26F20',
    color: '#fff',
    borderRadius: '50%',
    border: 'solid 2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    transition: 'opacity 0.3s ease-in-out',
    zIndex: 1000, 
  },
  hidden: {
    cursor: 'default',
    opacity: 0.5,
  },
  icon: {
    fontSize: '1rem',
  }
};

export default ScrollToTop;
