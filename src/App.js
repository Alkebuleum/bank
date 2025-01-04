import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import StickyHeader from "./components/StickyHeader";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="app-container">
            <StickyHeader />
            <HeroSection toggleMenu={toggleMenu} closeMenu={closeMenu} menuOpen={menuOpen} />
            <ServicesSection />
            <AboutSection />
            <ContactSection />
        </div>
    );
}

export default App;
