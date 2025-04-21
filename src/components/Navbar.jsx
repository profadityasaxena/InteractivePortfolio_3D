import React, {useEffect} from 'react';
import {navLinks} from "../constants/index.js";

const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])
    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>

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
