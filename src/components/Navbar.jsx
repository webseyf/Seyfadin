import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import '../styles/Navbar.css'; // Ensure this CSS file is created

const Navbar = ({ links }) => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setIsMobile(prevState => !prevState);
    }, []);

    return (
        <nav className={`navbar ${isMobile ? 'active' : ''}`} aria-label="Main Navigation">
            <div className="container">
                <div className="logo">
                    <a href="#hero" aria-label="Go to home">Seyfadin</a>
                </div>
                <ul className={`nav-links ${isMobile ? 'active' : ''}`} role="menubar">
                    {links.map((link, index) => (
                        <li key={index} role="none">
                            <a 
                                href={link.href} 
                                onClick={toggleMobileMenu} 
                                role="menuitem"
                                aria-label={`Go to ${link.text}`}
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
                <div 
                    className="menu-toggle" 
                    onClick={toggleMobileMenu} 
                    aria-label="Toggle mobile menu" 
                    role="button" 
                    tabIndex={0} 
                    onKeyPress={(e) => e.key === 'Enter' && toggleMobileMenu()}
                    aria-expanded={isMobile}
                    title={isMobile ? "Close menu" : "Open menu"} // Tooltip for better UX
                >
                    {isMobile ? (
                        <span className="icon-x icon">✖</span> // X icon when open
                    ) : (
                        <span className="icon-menu icon">☰</span> // Menu icon when closed
                    )}
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
};

Navbar.defaultProps = {
    links: [
        { href: '#about', text: 'About Me' },
        { href: '#skills', text: 'Skills' },
        { href: '#projects', text: 'Projects' },
        { href: '#services', text: 'Services' },
        { href: '#contact', text: 'Contact' },
    ],
};

export default Navbar;