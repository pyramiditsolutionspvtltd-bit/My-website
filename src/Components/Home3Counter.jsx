import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Home3Counter = ({
    counter_icon_1,
    counter_icon_2,
    counter_icon_3,
    counter_icon_4,
    passClass,
    mobile_device,
    desktop_device,
    customer_service3,
    db_server2,
}) => {

    const counters = [
        {
            countNum: 4560,
            countTitle: 'Apps Developed',
            counterPrefix: '+',
            icon: counter_icon_1 || mobile_device,
        },
        {
            countNum: 3600,
            countTitle: 'Website Design',
            counterPrefix: '+',
            icon: counter_icon_2 || desktop_device
        },
        {
            countNum: 3600,
            countTitle: 'Website Design',
            counterPrefix: '+',
            icon: counter_icon_2 || desktop_device
        },
        {
            countNum: 2750,
            countTitle: 'Happy Clients',
            counterPrefix: '+',
            icon: counter_icon_3 || customer_service3
        },
        {
            countNum: 1200,
            countTitle: 'Data Science',
            counterPrefix: '+',
            icon: counter_icon_4 || db_server2
        },
        {
            countNum: 1200,
            countTitle: 'Data Science',
            counterPrefix: '+',
            icon: counter_icon_4 || db_server2
        },
    ];

    const [isVisible, setIsVisible] = useState(Array(counters.length).fill(false));

    const handleVisibilityChange = (index, inView) => {
        if (inView) {
            setIsVisible((prevState) => {
                const newState = [...prevState];
                newState[index] = true;
                return newState;
            });
        }
    };

    return (
        <div className='rs-counter pb-120'>
            <div className="container">
                <div className="row">
                    {counters.map((counter, index) => {
                        const { ref, inView } = useInView({
                            threshold: 0.1,
                            triggerOnce: true,
                        });

                        // Call handleVisibilityChange whenever the visibility changes
                        useEffect(() => {
                            handleVisibilityChange(index, inView);
                        }, [index, inView]);

                        return (
                            <div key={index} className="col-lg-2 col-md-4 col-sm-6">
                                <div className="rs-counter__item">
                                    <div className="icon">
                                        <img src={counter.icon} alt={counter.countTitle} />
                                    </div>
                                    <div className="rs-counter-2__content">
                                        <div ref={ref} >
                                            <CountUp
                                                start={0}
                                                end={isVisible[index] ? counter.countNum : 0}
                                                duration={2}
                                            />
                                            <span className="counter-prefix">{counter.counterPrefix}</span>
                                        </div>
                                    </div>
                                    <h4 className="mb-0 title">{counter.countTitle}</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home3Counter;
