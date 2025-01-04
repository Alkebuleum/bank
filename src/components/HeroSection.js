import React from "react";
import "../styles/HeroSection.css";

const features = [
    { id: 1, title: "Secure Transactions", description: "Your assets are protected with top-tier security." },
    { id: 2, title: "Easy to Use", description: "A seamless experience for all users." },
    { id: 3, title: "24/7 Support", description: "We're here to help, anytime, anywhere." },
];

function HeroSection() {
    return (
        <section id="home" className="hero-section">
            {/* Main Content */}
            <div id="main-content" className="main-content">
                <header className="app-header">
                    <img
                        src={`${process.env.PUBLIC_URL}/ablogo.png`}
                        alt="App Logo"
                        className="app-logo spinning"
                    />
                    <h1 className="app-title">
                        Revolutionizing Africa <br />
                        <span className="gradient-text">Digital Asset Banking</span>
                    </h1>
                    <p className="app-description">
                        Unlock the future of finance with Akebank — empowering individuals and businesses with secure, innovative, and seamless digital asset solutions tailored for the African market.
                    </p>
                    <p className="app-tagline">Secure. Transparent. Innovative.</p>
                    <button className="cta-button">Get Started</button>
                </header>

                {/* Feature Cards */}
                <div className="feature-cards-container">
                    {features.map((feature) => (
                        <div className="feature-card" key={feature.id}>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
