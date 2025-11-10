import React, { useState } from 'react';
import { Link } from 'react-scroll';

const MenuItemsSingle = () => {
    const [duration]=useState(500);
    return (
        <>
            <li>
                <Link
                    to="rs-header"
                    smooth={true}
                    activeClass="active"
                    spy={true}
                    duration={duration}>Home
                </Link>
            </li>
            <li>
                <Link
                    to="rs-about"
                    smooth={true}
                    activeClass="active"
                    spy={true}
                    duration={duration}>About
                </Link>
            </li>
            <li>
                <Link
                    to="rs-service"
                    smooth={true}
                    activeClass="active"
                    spy={true}
                    duration={duration}>Services
                </Link>
            </li>
            <li>
                <Link
                    to="rs-portfolios"
                    smooth={true}
                    activeClass="active"
                    spy={true}
                    duration={duration}>Portfolios
                </Link>
            </li>
            <li>
                <Link
                    to="rs-blog"
                    smooth={true}
                    activeClass="active"
                    spy={true}
                    duration={duration}>Blog
                </Link>
            </li>
            <li>
                <Link
                    to="rs-contact"
                    smooth={true}
                    activeClass="active"
                    spy={true}
                    duration={duration}>Contact
                </Link>
            </li>
        </>
    );
};

export default MenuItemsSingle;