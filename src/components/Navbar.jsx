import React from 'react';
import {navLinks} from "../constants/index.js";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="inner">
                <a className="logo" href="#hero">
                    ADITYA SAXENA
                </a>
                <nav className="desktop">
                    <ul>
                        {navLinks.map((link, name) => (
                            <li key={name} className="group">
                                <a href={link.href}>
                                    <span>{link.name}</span>
                                </a>
                                <span className="underline"></span>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className="contact-btn group">
                    Contact Me
                </a>
            </div>
        </header>
    );
};

export default Navbar;
