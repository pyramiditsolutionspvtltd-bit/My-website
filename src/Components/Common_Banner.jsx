
import React from 'react';
import { Link } from 'react-router-dom';

const Common_Banner = ({pageName}) => {
    return (
        <div className="rs-page-banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="rs-page-banner__content">
                        <h1 className="title">{pageName}</h1>
                        <ul>
                            <li><i className="ri-home-wifi-line"></i> <Link to="#">Home</Link></li>
                            <li><i className="ri-arrow-right-fill"></i>{pageName}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Common_Banner;