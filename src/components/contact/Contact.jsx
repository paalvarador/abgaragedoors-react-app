import React from 'react';
import ContactInfo from './ContactInfo';
import "./contact.css"

const Contact = () => {
    return (
        <section className="contact_section" id="contact">
            <h2 className="contact_section-title">Contact<br />Us</h2>
            <span className="contact_section-subtitle">Get A Quote</span>

            <div className="contact_container">
                <ContactInfo />
                <div className="contact__content">
                    <h3 className="contact__title">Get A Quote Now</h3>
                    <div className="contact__form">
                        <div className="contact__form-div">
                            <label htmlFor="name" className="contact__form-tag">Name</label>
                            <input type="text" className="contact__form-input" name="name" placeholder="Insert your name" />
                        </div>
                        <div className="contact__form-div">
                            <label htmlFor="email" className="contact__form-tag">Email</label>
                            <input type="email" className="contact__form-input" name="email" placeholder="Insert your email" />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label htmlFor="message" className="contact__form-tag">Message</label>
                            <textarea className="contact__form-input" name="message" cols="30" rows="10" placeholder="Get A Quote? Send a message"></textarea>
                        </div>
                        <button className="button button--flex">Send Message</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact