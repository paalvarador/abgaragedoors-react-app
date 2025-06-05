import React, { useState, useEffect } from "react";
import axios from "axios";

function ContactInfo() {
  const [contactInfo, setContatInfo] = useState([]);

  useEffect((res, err) => {
    axios
      .get("https://abgaragedoors-api-rest.vercel.app/api/contact/all")
      .then((res) => {
        console.log(res);
        setContatInfo(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <div className="contact__content">
        {contactInfo.map((contact) => (
          <div key={contact._id} className="contact__card">
            <div className="contact__card-address">
              <i class="uil uil-location-pin-alt contact__card-icon"></i>
              <span className="contact__card-data">{contact.address}</span>
            </div>
            <div className="contact__card-contacts">
              <i className="bx bx-phone contact__card-icon"></i>
              <span className="contact__card-data">{contact.phone[0]}</span>
            </div>

            <div className="contact__card-contacts">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <a
                href="https://wa.link/ct9k90"
                className="contact__card-button"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="contact__card-contacts">
              <i class="bx  bx-envelope-open contact__card-icon"></i>
              <span className="contact__card-data">
                <a
                  href={"mailto:" + contact.email[1]}
                  className="contact__card-button"
                >
                  {contact.email[1]}
                </a>
              </span>
            </div>

            <hr className="contact__card-contacts-hr" />

            <div className="contact__card-contacts-schedule">
              <span className="contact__card-data">Mon-Fri: 8am - 5pm</span>
            </div>

            <div className="contact__card-contacts-schedule">
              <span className="contact__card-data">Sat: 9am - 12pm</span>
            </div>
          </div>
        ))}
        <div className="contact__card-serving">
          <span className="title">
            SERVING
            <br />
            NEW JERSEY
          </span>
          <hr className="hr" />
          <span className="subtitle">SINCE 2005</span>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
