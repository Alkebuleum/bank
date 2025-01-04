import React, { useState, useEffect } from "react";
import "../styles/StickyHeader.css";

function StickyHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`sticky-header ${isScrolled ? "scrolled" : ""}`}>
            <div className="header-left">
                <img
                    src={`${process.env.PUBLIC_URL}/ablogo.png`}
                    alt="Company Logo"
                    className="header-logo"
                />
                <span className="company-name">Akebank</span>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`sticky-menu ${menuOpen ? "open" : ""}`}>
                <a href="#home" className="menu-item" onClick={closeMenu}>
                    Home
                </a>
                <a href="#services" className="menu-item" onClick={closeMenu}>
                    Services
                </a>
                <a href="#about" className="menu-item" onClick={closeMenu}>
                    About Us
                </a>
                <a href="#contact" className="menu-item" onClick={closeMenu}>
                    Contact
                </a>
            </nav>
        </header>
    );
}

export default StickyHeader;
