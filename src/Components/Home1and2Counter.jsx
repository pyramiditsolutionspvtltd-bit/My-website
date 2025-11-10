import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Home1and2Counter = ({
    counter_icon_1,
    counter_icon_2,
    counter_icon_3,
    counter_icon_4,
    mobile_device,
    desktop_device,
    customer_service3,
    db_server2,
    passClass,
    showSecTitle
}) => {

    const counters = [
        {
            id: 1,
            countNum: 1000,
            countTitle: 'Wireless Solutions ',
            counterPrefix: '+',
            icon: counter_icon_1 || mobile_device,
        },
        {
            id: 2,
            countNum: 1500,
            countTitle: 'IP Surveillance ',
            counterPrefix: '+',
            icon: counter_icon_2 || desktop_device
        },
        {
            id: 3,
            countNum: 800,
            countTitle: 'Happy Clients',
            counterPrefix: '+',
            icon: counter_icon_3 || customer_service3
        },
        {
            id: 4,
            countNum:500,
            countTitle: 'Cyber Security',
            counterPrefix: '+',
            icon: counter_icon_4 || db_server2
        },
    ];


    const [isVisible, setIsVisible] = useState(Array(counters.length).fill(false));

    if (passClass === 'service-details-3') {
        counters.pop();
    }

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
        <div className={`rs-counter-2 ${passClass ? passClass : ''} ${passClass !== 'service-details-3' ? 'pb-125' : ''}`}>
            <div className="container">
                {(showSecTitle === true) && (
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rs-counter-2__title">
                                <h5 className="title">Glimpse of our work and presence</h5>
                            </div>
                        </div>
                    </div>
                )}

                <div className="row">
                    {counters.map((counter) => {
                        const { ref, inView } = useInView({
                            threshold: 0.1,
                            triggerOnce: true,
                        });

                        // Call handleVisibilityChange whenever the visibility changes
                        useEffect(() => {
                            handleVisibilityChange(counter.id, inView);
                        }, [counter.id, inView]);

                        return (
                            <div key={counter.id} className={`${passClass === 'service-details-3' ? 'col-lg-4 col-md-4' : 'col-lg-3 col-sm-6'} `}>
                                <div className={`rs-counter-2__item ${counter.id > 1 ? 'item-' + counter.id : ''}`}>
                                    <div className="rs-counter-2__icon">
                                        <img src={counter.icon} alt={counter.countTitle} />
                                    </div>
                                    <div className="rs-counter-2__content">
                                        <div className='title' ref={ref} >
                                            <CountUp
                                                start={0}
                                                end={isVisible[counter.id] ? counter.countNum : 0}
                                                duration={2}
                                            />
                                            <span className={`${passClass === 'service-details-3' ? 'rs-count' : ''}`}>{counter.counterPrefix}</span>
                                        </div>
                                        <span className="mb-0">{counter.countTitle}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home1and2Counter;
