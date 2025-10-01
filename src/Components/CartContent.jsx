import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartContent = ({ shop3, shop5 }) => {
    const initialCart = [
        {
            id: 1,
            image: shop3,
            name: 'Bluetooth Speaker',
            price: 30.00,
            quantity: 1,
        },
        {
            id: 2,
            image: shop5,
            name: 'Purifier Sharp',
            price: 30.00,
            quantity: 1,
        }
    ];

    const [cartItems, setCartItems] = useState(initialCart);
    const [couponCode, setCouponCode] = useState("");

    const handleQuantityChange = (id, newQuantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };
    const handleRemoveItem = (id) => {
        setCartItems(prevItems =>
            prevItems.filter(item => item.id !== id)
        );
    };

    const handleCouponChange = (e) => {
        setCouponCode(e.target.value);
    };

    const handleApplyCoupon = (e) => {
        e.preventDefault();
        // Add logic to apply the coupon here
        console.log(`Coupon applied: ${couponCode}`);
    };

    const handleUpdateCart = (e) => {
        e.preventDefault();
        // Add logic to update the cart here
        console.log("Cart updated");
    };

    const handleCheckout = () => {
        // Add logic to proceed to checkout
        console.log("Proceeding to checkout");
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="rs-cart pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="cart-wrap">
                    <form onSubmit={handleUpdateCart}>
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th className="product-remove"></th>
                                    <th className="product-thumbnail">Image</th>
                                    <th className="product-name">Product</th>
                                    <th className="product-price">Price</th>
                                    <th className="product-quantity">Quantity</th>
                                    <th className="product-subtotal">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td className="product-remove">
                                            <Link to="#" onClick={() => handleRemoveItem(item.id)}>
                                                <i className="ri-close-line"></i>
                                            </Link>
                                        </td>
                                        <td className="product-thumbnail">
                                            <Link to="#"><img src={item.image} alt={item.name} /></Link>
                                        </td>
                                        <td className="product-name"><Link to="#">{item.name}</Link></td>
                                        <td className="product-price"><span>$</span>{item.price.toFixed(2)}</td>
                                        <td className="product-quantity">
                                            <input
                                                type="number"
                                                className="input-text"
                                                value={item.quantity}
                                                min="1"
                                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                                            />
                                        </td>
                                        <td className="subtotal">
                                            <span className="amount"><span className="symbol">$</span>{(item.price * item.quantity).toFixed(2)}</span>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="6" className="action text-right">
                                        <div className="coupon">
                                            <input
                                                type="text"
                                                name="couponcode"
                                                placeholder="Coupon code"
                                                value={couponCode}
                                                onChange={handleCouponChange}
                                                required
                                            />
                                            <button type="submit" className="main-btn cart" onClick={handleApplyCoupon}>Apply Coupon</button>
                                        </div>
                                        <div className="update-cart">
                                            <button className="main-btn cart" type="submit">Update cart</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <div className="cart-collaterals pt-70 md-pt-50">
                        <div className="cart-totals">
                            <h5 className="title mb-10">Cart totals</h5>
                            <table className="cart-total-table">
                                <tbody>
                                    <tr className="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td><span className="amount"><span>$</span>{calculateSubtotal()}</span></td>
                                    </tr>
                                    <tr className="order-total">
                                        <th>Total</th>
                                        <td><strong><span className="amount"><span>$</span>{calculateSubtotal()}</span></strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="wc-proceed-to-checkout">
                                <button className="main-btn cart" onClick={handleCheckout}> Proceed to checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartContent;
