import React, { useState } from 'react'
import ContactInfo from './ContactInfo'
import "./contact.css"
import axios from 'axios';

const Contact = () => {
    const [modalState, setModalState] = useState(0)

    const modalAction = (index) => {
        if(index === 0) 
            document.getElementById("name").value = ""
            document.getElementById("email").value = ""
            document.getElementById("message").value = ""
        
        setModalState(index)
    }

    const sendEmail = () => {
        console.log("Hice clic en el botón enviar mensaje")

        const data = {
            "name": document.getElementById("name").value,
            "from": document.getElementById("email").value,
            "to": "rodrigo@abgaragedoors.com",
            "subject": "A new Message from " + document.getElementById("name").value,
            "message": document.getElementById("message").value
        }

        axios
            .post("https://sample-api-abgarage.herokuapp.com/api/email/send", data)
            .then(res => {
                console.log(res)
                
                res.status === 200 ? modalAction(1) : modalAction(0)
            })
            .catch(err => { console.error(err) })
    };
    return (
        <section className="contact_section" id="contact">
            <h2 className="contact_section-title">Contact<br />Us</h2>
            <span className="contact_section-subtitle">Get A Quote</span>

            <div className="contact_container">
                <ContactInfo />
                <div className="contact__content">
                    <h3 className="contact__title">Get A Quote Now</h3>
                    <form className="contact__form">
                        <div className="contact__form-div">
                            <label htmlFor="name" className="contact__form-tag">Name</label>
                            <input id="name" type="text" className="contact__form-input" name="name" placeholder="Insert your name" />
                        </div>
                        <div className="contact__form-div">
                            <label htmlFor="email" className="contact__form-tag">Email</label>
                            <input id="email" type="email" className="contact__form-input" name="email" placeholder="Insert your email" />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label htmlFor="message" className="contact__form-tag">Message</label>
                            <textarea id="message" className="contact__form-input" name="message" cols="30" rows="10" placeholder="Get A Quote? Send a message"></textarea>
                        </div>
                        <input type="button" onClick={sendEmail} className="button button--flex" value="Send Message" />
                    </form>
                </div>
                <div className={modalState === 1 ? "contact__modal active-modal" : "contact__modal"}>
                    <div className="contact__modal-content">
                        <h3 className="contact__modal-title">Message from AB Garage Doors</h3>
                        <i className="uil uil-message contact__modal-icon"></i>
                        <p className="contact__modal-message">Thank you for your message. We'll contact you soon</p>
                        <div className="contact__modal-button" onClick={() => modalAction(0)}>
                            <span>It's OK</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact