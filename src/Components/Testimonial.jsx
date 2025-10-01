import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

const Testimonial = ({ heart_pulse_rate_orange_2, heart_pulse_rate_orange, testi1, testimonial_left_img, quote_orange, testimonial_brsnd_2, testi3, testi2, testi5, testi4, passClass }) => {
    const persons = [
        {
            _id: 1,
            image1: quote_orange,
            image2: testi1,
            image3: testimonial_brsnd_2,
            details: 'Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality. Podcasting operational change management inside of workflows to establish a framework.',
            name: 'Martins Ana',
            designation: 'CEO, Bribbble LLC'
        },
        {
            _id: 2,
            image1: quote_orange,
            image2: testi2,
            image3: testimonial_brsnd_2,
            details: 'Keeping your eye on the ball while performing a deep dive on the start-up mentality. Taking seamless key performance indicators offline to maximise the long tail.  Podcasting operational change management inside of workflows to establish a framework.',
            name: 'Robards Lynda',
            designation: 'Company SEO, Google'
        },
        {
            _id: 3,
            image1: quote_orange,
            image2: testi3,
            image3: testimonial_brsnd_2,
            details: 'Operational  podcasting change management inside of workflows to establish a framework . Keeping your eye on the ball while performing a deep dive on the start-up mentality. Taking seamless key performance indicators offline to maximize the long tail.',
            name: 'Taylor Matthew',
            designation: 'SEO & Founder, Facebook'
        },
        {
            _id: 4,
            image1: quote_orange,
            image2: testi4,
            image3: testimonial_brsnd_2,
            details: 'Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality. Podcasting operational change management inside of workflows to establish a framework.',
            name: 'Ribeiro Nicolas',
            designation: 'HR, Envato'
        },
        {
            _id: 5,
            image1: quote_orange,
            image2: testi5,
            image3: testimonial_brsnd_2,
            details: 'Operational establish to Podcasting change management inside of workflows a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality.',
            name: 'Howard Esther',
            designation: 'CEO, Bribbble LLC'
        },
    ];

    // Slick
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
    
    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    return (
        <div className={`rs-testimonial-2 ${passClass ? passClass : 'pt-110 pb-120'}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="rs-testimonial-2__left-content">
                            <div className="rs-section-title black">
                                <div className="top-sub-heading">
                                    <img src={heart_pulse_rate_orange_2} alt="icon" />
                                    <span>Testimonials </span>
                                    <img src={heart_pulse_rate_orange} alt="icon" />
                                </div>
                                <h2 className="title split-in-fade">What happy clients says about us?</h2>
                                <div className="rs-thumb">
                                    <img src={testimonial_left_img} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="rs-testimonial-2__slider-box">
                            <Slider
                                asNavFor={nav2}
                                dots= {false}
                                arrows= {false}
                                className="testi-content-part"
                                ref={slider => (sliderRef1 = slider)}>
                                {
                                    persons && persons.map(person => (
                                        <div key={person._id} className="rs-testimonial-2__items">
                                            <div className="testimonial-content">
                                                <img src={person.image1} alt="" />
                                                <p>{person.details}</p>
                                            </div>
                                            <div className="testimonial-author">
                                                <div className="author-thumb">
                                                    <img src={person.image2} alt="" />
                                                </div>
                                                <div className="author-content">
                                                    <h5 className="title">{person.name}</h5>
                                                    <span>{person.designation}</span>
                                                    <img src={person.image3} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                            {/* Thumbnail */}
                            <Slider
                                asNavFor={nav1}
                                ref={slider => (sliderRef2 = slider)}
                                slidesToShow={5}
                                directionNav= {true}
                                focusOnSelect={true}
                                centerMode = {true}
                                dots= {false}
                                arrows= {false}
                                vertical= {true}
                                verticalSwiping= {true}
                                className="testi-thumb-part"
                            >
                                {
                                    persons && persons.map(person => (
                                        <div className="rs-thumb" key={person._id}> 
                                            <img src={person.image2} alt="" />
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
