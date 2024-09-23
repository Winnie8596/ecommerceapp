import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';
import '../../styles/FooterStyles.css';

import newsletter from '../../images/newsletter.png';

const Footer = () => {
    return (
        <>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-15 align-align-items-center">
                                <img src={newsletter} alt="newsletter" />
                                <h2 className="mb-0 text-white" style={{ fontSize: '24px' }}>
                                    Sign Up for NewsLetter
                                </h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your email address"
                                    aria-label="Your email address"
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Contact</h4>
                            <div className="footer-links d-flex flex-column">
                                <address className="text-white py-2">
                                    Address: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.
                                </address>
                                <Link to="tel:098 9831 609" className="d-block mb-1 text-white">
                                    Phone: 098 9831 609
                                </Link>
                                <Link
                                    to="mailto:nguyendu334@gmail.com"
                                    className="mt-3 d-block mb-1 text-white"
                                >
                                    Email: nguyendu334@gmail.com
                                </Link>
                                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                                    <Link className="text-white" to="">
                                        <BsLinkedin className="fs-4" />
                                    </Link>
                                    <Link className="text-white" to="">
                                        <BsGithub className="fs-4" />
                                    </Link>
                                    <Link className="text-white" to="">
                                        <BsInstagram className="fs-4" />
                                    </Link>
                                    <Link className="text-white" to="">
                                        <BsYoutube className="fs-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Information</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                                    Privacy Policy
                                </Link>
                                <Link to="/refund-policy" className="text-white py-2 mb-1">
                                    Refund Policy
                                </Link>
                                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                                    Shipping Policy
                                </Link>
                                <Link to="/term-conditions" className="text-white py-2 mb-1">
                                    Term & Conditions
                                </Link>
                                <Link to="/blogs" className="text-white py-2 mb-1">
                                    Blogs
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Account</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">About Us</Link>
                                <Link className="text-white py-2 mb-1">FAQ</Link>
                                <Link className="text-white py-2 mb-1">Contact</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Laptops</Link>
                                <Link className="text-white py-2 mb-1">Headphones</Link>
                                <Link className="text-white py-2 mb-1">Tablets</Link>
                                <Link className="text-white py-2 mb-1">Watchs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()} Powered by haha193
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
