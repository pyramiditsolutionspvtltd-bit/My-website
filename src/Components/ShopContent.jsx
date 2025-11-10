import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MultiRangeSlider from "./MultiRangeSlider";


const ShopContent = ({ shop1, shop2, shop3, shop4, shop5, shop6, shop7, shop8, shop9 }) => {
    const [selectedValue, setSelectedValue] = useState("volvo");

    const products = [
        {
            _id: 1,
            productName: 'Air Purifier',
            image: shop1,
            price: '$30.00'
        },
        {
            _id: 2,
            productName: 'Black Watch',
            image: shop2,
            price: '$40.00'
        },
        {
            _id: 3,
            productName: 'Bluetooth Speaker',
            image: shop3,
            price: '$42.00'
        },
        {
            _id: 4,
            productName: 'Instax Camera',
            image: shop4,
            price: '$70.00'
        },
        {
            _id: 5,
            productName: 'Purifier Sharp',
            image: shop5,
            price: '$22.00'
        },
        {
            _id: 6,
            productName: 'Slim Headphone',
            image: shop6,
            price: '$29.00'
        },
        {
            _id: 7,
            productName: 'Smart Phone',
            image: shop7,
            price: '$99.00'
        },
        {
            _id: 8,
            productName: 'Smart Watch',
            image: shop8,
            price: '$25.00'
        },
        {
            _id: 9,
            productName: 'Sound Speaker',
            image: shop9,
            price: '$45.00'
        },
    ];

    return (
        <div className="rs-shop-page pt-90 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="rs-shop-page__box mt-30">
                            <div className="shop-page-topbar">
                                <p> Showing 1–9 of 12 results</p>
                                <select name="cars" id="cars" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                                    <option value="volvo">Default sorting</option>
                                    <option value="popularity">Sort by popularity</option>
                                    <option value="rating">Sort by average rating</option>
                                    <option value="date">Sort by latest</option>
                                    <option value="price">Sort by price: low to high</option>
                                    <option value="price-desc">Sort by price: high to low</option>
                                </select>
                            </div>
                            <div className="row">
                                {
                                    products && products.map(product => (
                                        <div key={product._id} className="col-lg-4 col-sm-6">
                                            <div className="rs-shop-item mt-40">
                                                <div className="rs-thumb">
                                                    <Link to="/product-single">
                                                        <img src={product.image} alt="" />
                                                        <span className="rs-add-cart">Add To Cart</span>
                                                    </Link>
                                                </div>
                                                <div className="rs-content">
                                                    <Link to="/product-single">{product.productName}</Link>
                                                    <h5 className="rs-price">{product.price}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="col-lg-12">
                                    <div className="rs-shop-page__breadcrumb">
                                        <ul>
                                            <li><Link className="active" to="#"><span>1</span></Link></li>
                                            <li><Link to="#">2</Link></li>
                                            <li><Link to="#"><i className="ri-arrow-right-fill"></i></Link></li>
                                        </ul>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="rs-shop-page__sidebar mt-30">
                            <div className="rs-shop-filter mt-40">
                                <h4 className="title">Filter by price</h4>
                                <div className="price-range-block">
                                    <MultiRangeSlider
                                        min={0}
                                        max={100}
                                        onChange={({ min, max }) => {}}
                                    />
                                </div>
                            </div>
                            <div className="rs-shop-tag mt-40">
                                <h3 className="title">Product tags</h3>
                                <ul>
                                    <li><Link to="#">Bags</Link></li>
                                    <li><Link to="#">Coffee</Link></li>
                                    <li><Link to="#">Digital</Link></li>
                                    <li><Link to="#">Laptop</Link></li>
                                    <li><Link to="#">Mans</Link></li>
                                    <li><Link to="#">Phone</Link></li>
                                    <li><Link to="#">Smart</Link></li>
                                    <li><Link to="#">Techzen</Link></li>
                                    <li><Link to="#">Watch</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopContent;
