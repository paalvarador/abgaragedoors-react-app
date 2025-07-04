import axios from "axios";
import { useState } from "react";

function ContactMessage() {
  const [modalState, setModalState] = useState(0);

  const modalAction = (index) => {
    if (index === 0) document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    setModalState(index);
  };

  const sendEmail = () => {
    const data = {
      name: document.getElementById("name").value,
      from: document.getElementById("email").value,
      to: "rodrigo@abgaragedoors.com",
      message: document.getElementById("message").value,
    };

    axios
      .post("http://localhost:3000/api/email/send", data)
      .then((res) => {

        res.status === 200 ? modalAction(1) : modalAction(0);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="contact__content">
      <div className="contact__card-message">
        <h3 className="contact__title">Get A Quote</h3>
        <form className="contact__form">
          <input
            id="name"
            type="text"
            className="contact__form-input"
            name="name"
            placeholder="John Doe"
          />
          <input
            id="email"
            type="email"
            className="contact__form-input"
            name="email"
            placeholder="john@example.com"
          />
          <select name="serviceType">
            <option value="service">Select a service</option>
            <option value="installation">Installation</option>
            <option value="repair">Repair</option>
            <option value="consulting">Consulting</option>
          </select>
          <textarea
            id="message"
            className="contact__form-input"
            name="message"
            cols="40"
            rows="5"
            placeholder="Enter your message here"
          ></textarea>
          <input type="file" id="messageFile" name="messageFile"></input>
          <input
            type="button"
            onClick={sendEmail}
            className="button button--flex"
            value="Send Message"
          />
        </form>
        <div
          className={
            modalState === 1 ? "contact__modal active-modal" : "contact__modal"
          }
        >
          <div className="contact__modal-content">
            <h3 className="contact__modal-title">
              Message from AB Garage Doors
            </h3>
            <i className="uil uil-message contact__modal-icon"></i>
            <p className="contact__modal-message">
              Thank you for your message. We'll contact you soon
            </p>
            <div
              className="contact__modal-button"
              onClick={() => modalAction(0)}
            >
              <span>It's OK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMessage;
