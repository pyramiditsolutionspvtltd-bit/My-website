import React from 'react';
import { Link } from 'react-router-dom';

const Price = ({ pricingData }) => {
    const shuffleArray = (array) => {
        // Durstenfeld shuffle algorithm
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <div className="row">
            {pricingData.map((data, index) => {
                const enabledListsCount =
                    data.packageName === 'Silver Package' ? 2 :
                    data.packageName === 'Gold Package' ? 3 :
                    data.packageName === 'Platinum Package' ? 4 : 2;

                // Create an array of indexes for the lists
                const listIndexes = [0, 1, 2, 3, 4];
                // Shuffle the list indexes
                const shuffledIndexes = shuffleArray([...listIndexes]);

                return (
                    <div key={index} className="col-lg-4 col-md-6">
                        <div className="rs-pricing__item">
                            <div className="rs-pricing__top-header">
                                <span>{data.packageName}</span>
                                <div className="rs-pricing__price-box">
                                    <h3 className="title">${data.price.toFixed(2)} <span>{data.limit}</span></h3>
                                </div>
                            </div>
                            <div className="rs-pricing__body">
                                <ul>
                                    {shuffledIndexes.map((idx) => (
                                        // Use idx as the index for accessing list and checking if it should be enabled
                                        <li key={idx} className={idx < enabledListsCount ? 'list' : 'list disabled'}>
                                            <i className={idx < enabledListsCount ? 'ri-checkbox-circle-line' : 'ri-checkbox-blank-circle-line'}></i> {data[`list${idx + 1}`]}
                                        </li>
                                    ))}
                                </ul>
                                <Link className="main-btn" to={data.linkUrl}>{data.linkItem} <i className="ri-arrow-right-fill"></i></Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Price;
