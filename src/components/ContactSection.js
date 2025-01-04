import React from "react";
import "../styles/Sections.css";

function ContactSection() {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact Us</h2>
            <p>Email: support@akebank.com</p>
            <p>Phone: +231-77-830-2181</p>
            <p>Address: 123 Airfield-Sinkor, Monrovia, Liberia</p>
            <p>&copy; {new Date().getFullYear()} Akebank. All rights reserved.</p>
        </section>
    );
}

export default ContactSection;