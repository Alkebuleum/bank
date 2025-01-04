import React from "react";
import "../styles/AboutSection.css";


const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="about-section-title">About Us</h2>
                <div className="about-content redesigned-layout">
                    <div className="about-image">
                        <img
                            src="/aboutUsImg.png"
                            alt="About Akebank and Alkebuleum Foundation"
                        />
                    </div>
                    <div className="about-text">
                        <p>
                            Alkebuleum Foundation Inc, registered in Liberia, is dedicated to leveraging emerging technologies to promote transparency, economic growth, and prosperity in the regions where it operates. We are committed to helping communities overcome barriers to growth by introducing innovative solutions that simplify and modernize financial systems.
                        </p>
                        <p>
                            To kickstart this dream, we established <strong>Akebank</strong>, a pioneering initiative aimed at transforming the economy through the adoption of digital finance. By utilizing blockchain technology, Akebank ensures transparency in financial transactions and works to eliminate corruption. Our goal is to provide tools and solutions that empower individuals and businesses to achieve faster growth and unlock their full potential.
                        </p>
                        <p>
                            The foundation operates with a unique governance structure, where committees serve as boards for each business under its umbrella. These boards are tasked with strategic decision-making and appointing leadership for our ventures. Currently, Ernesto Herbert serves as the CEO of Akebank, steering the organization towards its mission of fostering a financially inclusive future.
                        </p>
                    </div>
                </div>
                <div className="about-values">
                    <h3>Our Core Values</h3>
                    <ul>
                        <li><strong>Transparency:</strong> Leveraging blockchain to build trust and eliminate corruption.</li>
                        <li><strong>Innovation:</strong> Introducing cutting-edge solutions to modernize financial systems.</li>
                        <li><strong>Empowerment:</strong> Providing tools that enable individuals and businesses to grow.</li>
                        <li><strong>Sustainability:</strong> Building systems that ensure long-term economic growth and prosperity.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;