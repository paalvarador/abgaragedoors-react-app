import React, { useRef } from 'react';
import ContactInfo from './ContactInfo';
import "./contact.css"

import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_prn2scn', 'template_33jj7u4', form.current, 'uV7Y5NspUBNWLptRv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section className="contact_section" id="contact">
            <h2 className="contact_section-title">Contact<br />Us</h2>
            <span className="contact_section-subtitle">Get A Quote</span>

            <div className="contact_container">
                <ContactInfo />
                <div className="contact__content">
                    <h3 className="contact__title">Get A Quote Now</h3>
                    <form className="contact__form" ref={form} onSubmit={sendEmail}>
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
                        <input type="submit" className="button button--flex" value="Send Message"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact