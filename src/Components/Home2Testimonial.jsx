import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

const Home2Testimonial = ({ testimonial_thumb1, testimonial_thumb2, testimonial_line, four_five, quote_red_icon, testimonial_brsnd_4, testi1, testi3, testi2, testi5, testi4,  }) => {
    
    // Slick
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
    
    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
    
    const persons = [
        {
            _id: 1,
            image1: quote_red_icon,
            image2: four_five,
            image3: testimonial_brsnd_4,
            testiImg: testi1,
            details: 'Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality. Podcasting operational change management inside of workflows to establish a framework.',
            name: 'Martins Ana',
            designation: 'CEO, Bribbble LLC'
        },
        {
            _id: 2,
            image1: quote_red_icon,
            image2: four_five,
            image3: testimonial_brsnd_4,
            testiImg: testi2,
            details: 'Keeping your eye on the ball while performing a deep dive on the start-up mentality. Taking seamless key performance indicators offline to maximise the long tail.  Podcasting operational change management inside of workflows to establish a framework.',
            name: 'Robards Lynda',
            designation: 'Company SEO, Google'
        },
        {
            _id: 3,
            image1: quote_red_icon,
            image2: four_five,
            image3: testimonial_brsnd_4,
            testiImg: testi3,
            details: 'Operational  podcasting change management inside of workflows to establish a framework . Keeping your eye on the ball while performing a deep dive on the start-up mentality. Taking seamless key performance indicators offline to maximize the long tail.',
            name: 'Taylor Matthew',
            designation: 'SEO & Founder, Facebook'
        },
        {
            _id: 4,
            image1: quote_red_icon,
            image2: four_five,
            image3: testimonial_brsnd_4,
            testiImg: testi4,
            details: 'Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality. Podcasting operational change management inside of workflows to establish a framework.',
            name: 'Ribeiro Nicolas',
            designation: 'HR, Envato'
        },
        {
            _id: 5,
            image1: quote_red_icon,
            image2: four_five,
            image3: testimonial_brsnd_4,
            testiImg: testi5,
            details: 'Operational establish to Podcasting change management inside of workflows a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality.',
            name: 'Howard Esther',
            designation: 'CEO, Bribbble LLC'
        },
        {
            _id: 6,
            image1: quote_red_icon,
            image2: four_five,
            image3: testimonial_brsnd_4,
            testiImg: testi2,
            details: 'Keeping your eye on the ball while performing a deep dive on the start-up mentality. Taking seamless key performance indicators offline to maximise the long tail.  Podcasting operational change management inside of workflows to establish a framework.',
            name: 'robbie williams',
            designation: 'CEO & Founder'
        },
    ];


    return (
        <div className="rs-testimonial-3 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-testimonial-3__slider">
                            <div className="rs-top-title">
                                <h2 className="title">Testimonials</h2>
                            </div>
                            <div className="rs-testimonial-slider-box">
                                <Slider
                                    asNavFor={nav2}
                                    dots= {false}
                                    arrows= {false}
                                    className="carousel carousel-main"
                                    ref={slider => (sliderRef1 = slider)}>
                                    {
                                        persons && persons.map(person => (
                                            <div key={person._id} className="carousel-cell">

                                                <div className="testimonial-item">
                                                    <div className="quote-icon">
                                                        <img src={person.image1} alt="" />
                                                    </div>
                                                    <p>{person.details}</p>
                                                    <ul>
                                                        <li className="rs-review"><img src={person.image2} alt="" /></li>
                                                    </ul>
                                                    <div className="rs-author">
                                                        <h5 className="title">{person.name}</h5>
                                                        <span>{person.designation}</span>
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
                                    slidesToShow={4}
                                    focusOnSelect={true}
                                    dots= {false}
                                    arrows= {false}
                                    className="carousel carousel-nav"
                                >
                                    {
                                        persons && persons.map(person => (
                                            <div className="carousel-cell" key={person._id}>
                                                <div className="rs-thumb">
                                                    <img src={person.testiImg} alt="" />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rs-image-1">
                <img className="gsap-move down-200 start-91" src={testimonial_thumb1} alt="" />
            </div>
            <div className="rs-image-2">
                <img className="gsap-move up-200 start-91" src={testimonial_thumb2} alt="" />
            </div>
            <div className="rs-shape-1">
                <img src={testimonial_line} alt="" />
            </div>
            <div className="rs-shape-2">
                <img src={testimonial_line} alt="" />
            </div>
        </div>
    );
};

export default Home2Testimonial;
