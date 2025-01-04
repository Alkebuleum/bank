import React from "react";
import "../styles/ServicesSection.css"; // Assuming you use CSS for styling

const ServicesSection = () => {
    const services = [
        {
            title: "Digital Asset Banking",
            description:
                "Secure management and transactions for cryptocurrencies and tokenized assets. Simplify your digital finance journey.",
            image: "/digitalAssetImg.png",
        },
        {
            title: "DeFi Solutions",
            description:
                "Access decentralized finance tools and platforms designed for emerging markets. Unlock the power of DeFi.",
            image: "/DefiImg.png",
        },
        {
            title: "Fintech Innovations",
            description:
                "Innovative financial solutions tailored to the needs of African businesses and individuals.",
            image: "/fintechImg.png",
        },
        {
            title: "Asset Locker Service",
            description:
                "A secure and reliable solution designed to hold and manage assets on behalf of individuals and businesses.",
            image: "/poslockerImg.png",
        },
        {
            title: "Customer Service as a Service",
            description:
                "Outsource your customer support with our specialized teams, tailored for fintech businesses.",
            image: "/customerServiceImg.png",
        },
        {
            title: "Financial Education",
            description:
                "Workshops and online courses to help businesses and individuals understand digital assets and blockchain.",
            image: "/defiEducationImg.png",
        },
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <img
                                src={service.image}
                                alt={service.title}
                                className="service-image"
                            />
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;