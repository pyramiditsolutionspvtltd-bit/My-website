import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyAccountContent = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [registerEmail, setRegisterEmail] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    const [registerMessage, setRegisterMessage] = useState('');

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            // Simulate login logic
            await new Promise(resolve => setTimeout(resolve, 1000));
            setLoginMessage('Login successful!');
            // Clear form fields
            setLoginEmail('');
            setLoginPassword('');
            setRememberMe(false);
        } catch (error) {
            setLoginMessage('Login failed. Please try again.');
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            // Simulate register logic
            await new Promise(resolve => setTimeout(resolve, 1000));
            setRegisterMessage('Registration successful! A password will be sent to your email address.');
            // Clear form field
            setRegisterEmail('');
        } catch (error) {
            setRegisterMessage('Registration failed. Please try again.');
        }
    };

    return (
        <div className="rs-my-account pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 md-mb-50">
                        <h2 className="title pb-30 md-pb-15">Login</h2>
                        <div className="rs-login">
                            <form onSubmit={handleLoginSubmit}>
                                <div className="form-group mb-30">
                                    <label>Username or email address<span>*</span></label>
                                    <input
                                        id="loginEmail"
                                        name="loginEmail"
                                        className="form-control-mod"
                                        type="email"
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                        required
                                    />
                                    <label className="mt-20">Password <span>*</span></label>
                                    <input
                                        id="loginPassword"
                                        name="loginPassword"
                                        className="form-control-mod"
                                        type="password"
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button className="main-btn" type="submit">Log In</button>
                                <label>
                                    <input
                                        className="woocommerce-form__input woocommerce-form__input-checkbox"
                                        name="rememberme"
                                        type="checkbox"
                                        id="rememberme"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                    <span>Remember me</span>
                                </label>
                                <div className="last-password pt-30">
                                    <Link to="#">Lost your password?</Link>
                                </div>
                            </form>
                            {loginMessage && <p className="form-message">{loginMessage}</p>}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="title pb-30 md-pb-15">Register</h2>
                        <div className="rs-login">
                            <form onSubmit={handleRegisterSubmit}>
                                <div className="form-group">
                                    <label>Email address<span>*</span></label>
                                    <input
                                        id="registerEmail"
                                        name="registerEmail"
                                        className="form-control-mod"
                                        type="email"
                                        value={registerEmail}
                                        onChange={(e) => setRegisterEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <p>A password will be sent to your email address.</p>
                                <p>
                                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link to="#">privacy policy.</Link>
                                </p>
                                <button className="main-btn" type="submit">Register</button>
                            </form>
                            {registerMessage && <p className="form-message">{registerMessage}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccountContent;
