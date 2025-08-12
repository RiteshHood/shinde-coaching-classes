import React from "react";
import "../stylesheets/ContactSection.css"
import call from "../assets/call.png"
import email from "../assets/email.png"
import location from "../assets/location.png"

function ContactUs() {
    return (

        <section className="contact-section" id="contact">
            <h2 className="section-title">Get in Touch</h2>
            <p className="contact-subtext">
                We’d love to hear from you. Reach out for inquiries, demo classes, or admissions.
            </p>

            <div className="contact-info-grid">
                <div className="contact-info-item">
                    <h4><img src={call} alt="" />Phone :</h4>
                    <p>+91 9021467222</p>
                </div>
                <div className="contact-info-item">
                    <h4><img src={email} alt="" />Email :</h4>
                    <p>shahajisirji@gmail.com</p>
                </div>
                <div className="contact-info-item">
                    <h4><img src={location} alt="" />Address :</h4>
                    <p>
                        Shinde Coaching Classes,<br />
                        Siddhivinayak Nagar, Chandanzira,<br />
                        Jalna, Maharashtra – 431203
                    </p>
                </div>
            </div>

            <div className="form-map-wrapper">
                {/* Contact Form */}
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea rows="4" placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>

                {/* Google Map Embed */}
                <div className="map-container">
                    <iframe
                        title="Shinde Coaching Location"
                        src="https://www.google.com/maps/embed?pb=..."
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );


}
export default ContactUs