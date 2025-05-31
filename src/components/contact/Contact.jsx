import ContactInfo from "./ContactInfo";
import ContactMessage from "./ContactMessage";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact_section" id="contact">
        <div className="overlay"></div>
        <h2 className="contact_section-title">Let's Talk Garage Doors</h2>
        <span className="contact_section-subtitle">
          Have a question or need a quote? We're here to help.
        </span>

        <div className="contact_container">
          <ContactInfo />
          <ContactMessage />
        </div>
      </section>
    </>
  );
};

export default Contact;
