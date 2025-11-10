import React from 'react';

const GoogleMap = () => {
  return (
    <div className="rs-g-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.53077677407!2d78.448971!3d17.441388!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c5dab08fe5%3A0xd8057e987112958d!2sPyramid%20IT%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1758549104519!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;