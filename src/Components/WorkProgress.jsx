import React from 'react';

const WorkProgress = ({ t_logo, process1, process2, process3, process4, red_arrow_circle_img, red_bottom_circle_img, project_shape_1, project_shape_2 }) => {
    const progresses = [
        { image1: process1, image2: red_arrow_circle_img, title: 'Discovery', details: 'Podcasting operational change management inside of workflows to establish a framework.' },
        { image1: process2, image2: red_bottom_circle_img, title: 'Product Designing', details: 'Objectively innovate empowered manufactured products whereas Holisticly platforms.' },
        { image1: process3, image2: red_arrow_circle_img, title: 'Custom Solutions', details: 'Proactively envisioned multimedia based expertise and cross-media growth strategies.' },
        { image1: process4, image2: red_bottom_circle_img, title: 'Our Success', details: 'Objectively innovate empowered manufactured products whereas Holisticly platforms.' },
    ]
    return (
        <div className="rs-progress-3 pt-115 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-2">
                            <span><img src={t_logo} alt="" /> Work Process</span>
                            <h2 className="title split-in-fade">Our some development process</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        progresses && progresses.map((progres, index) => (
                            <div key={index} className="col-lg-3 col-sm-6">
                                <div className={`${(index + 1) % 2 !== 0 ? "rs-progress-3__item" : "rs-progress-3__item item-2" }`}>
                                    <div className="rs-progress-3__thumb">
                                        {
                                            (index + 1) % 2 !== 0 ?
                                                <>
                                                    <span>{index + 1}</span>
                                                    <img src={progres.image1} alt="" />
                                                    <div className="rs-shape">
                                                        <img src={progres.image2} alt="" />
                                                    </div>
                                                </> :

                                                <>
                                                    <span>{index + 1}</span>
                                                    <div className="rs-shape">
                                                        <img src={progres.image2} alt="" />
                                                    </div>
                                                    <img src={progres.image1} alt="" />
                                                </>
                                        }

                                    </div>
                                    <div className="rs-progress-3__content">
                                        <h4 className="title">{progres.title}</h4>
                                        <p>{progres.details}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="rs-shape-1">
                <img className="gsap-move right-200 start-91" src={project_shape_1} alt="" />
            </div>
            <div className="rs-shape-2">
                <img className="gsap-move down-200 start-91" src={project_shape_2} alt="" />
            </div>
        </div>
    );
};

export default WorkProgress;
