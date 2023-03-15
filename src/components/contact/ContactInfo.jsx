import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContactInfo() {
  const [contactInfo, setContatInfo] = useState([]);

  useEffect((res, err) => {
    axios
      .get("https://sample-api-abgarage.herokuapp.com/api/contact/all")
      .then(res => {
        console.log(res);
        setContatInfo(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);
  return (
    <>
      <div className="contact__content">
        <h3 className="contact__title">Call or Text WhatsApp</h3>
        <div className="contact__info">
          {
            contactInfo.map((contact) => (
              <div key={contact._id} className="contact__card">
                <i className="bx bx-mail-send contact__card-icon"></i>
                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">{contact.email[0]}</span>
                <span className="contact__card-data">{contact.email[1]}</span>
                <a href={"mailto:"+contact.email[0]} className="contact__card-button">Write email</a>
              </div>
            ))
          }
          {
            contactInfo.map((contact) => (
              <div key={contact._id} className="contact__card">
                <i className="bx bxl-whatsapp contact__card-icon"></i>
                <h3 className="contact__card-title">WhatsApp</h3>
                <span className="contact__card-data">{contact.phone[0]}</span>
                <a href="https://wa.link/ct9k90" className="contact__card-button" target="_blank" rel="noreferrer">Write WhatsApp</a>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default ContactInfo