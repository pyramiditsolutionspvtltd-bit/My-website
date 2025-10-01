import React from 'react';
import Common_Question from './Common_Question';

const FaqContent = ({faq_left_img}) => {
    return (
        <div  className="rs-faq-page pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="rs-faq-page__box retouch">
                            <Common_Question
                            activeItem= {0}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-faq-page__thumb">
                            <img src={faq_left_img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqContent;