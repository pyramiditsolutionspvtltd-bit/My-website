import Price from './Price';
import PropTypes from 'prop-types';

const Our_Pricing = ({heart_pulse_rate_orange_2,heart_pulse_rate_orange, passClass}) => {
    const pricingData = [
        {
            packageName: 'Silver Package',
            price: 29.00,
            limit: 'Per Month',
            list1: '30 Days Trial Features',
            list2: 'Unlimited Features',
            list3: 'Multi-Language Content',
            list4: 'Data backup and recovery',
            list5: 'Synced To Cloud Database',
            linkItem: 'Get Started',
            linkUrl: '/contact'
        },
        {
            packageName: 'Gold Package',
            price: 49.00,
            limit: 'Per Month',
            list1: '30 Days Trial Features',
            list2: 'Unlimited Features',
            list3: 'Multi-Language Content',
            list4: 'Data backup and recovery',
            list5: 'Synced To Cloud Database',
            linkItem: 'Get Started',
            linkUrl: '/contact'
        },
        {
            packageName: 'Platinum Package',
            price: 99.00,
            limit: 'Per Month',
            list1: '30 Days Trial Features',
            list2: 'Unlimited Features',
            list3: 'Multi-Language Content',
            list4: 'Data backup and recovery',
            list5: 'Synced To Cloud Database',
            linkItem: 'Get Started',
            linkUrl: '/contact'
        },
    ];

    return (
        <div className={`${passClass ? passClass : 'rs-pricing'} pt-110 pb-120`} style={{display: 'none'}}>
            <div className="container">
                <div className="row align-items-center mb-30">
                    <div className="col-lg-6">
                        <div className="rs-section-title black">
                            <div className="top-sub-heading">
                                <img src={heart_pulse_rate_orange_2} alt="icon" />
                                <span>Start Business</span>
                                <img src={heart_pulse_rate_orange} alt="icon" />
                            </div>
                            <h2 className="title split-in-fade">Our popular pricing package</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`${passClass}-top-text`}>
                            <p> Bring to the table win-win survival strategies to ensure proactive domination At the end of the day.</p>
                        </div>
                    </div>
                </div>
                <Price pricingData={pricingData} />
            </div>
        </div>
    );
};

Our_Pricing.propTypes = {
    heart_pulse_rate_orange_2: PropTypes.string,
    heart_pulse_rate_orange: PropTypes.string,
    passClass: PropTypes.string,
};

export default Our_Pricing;