import React from "react";
import TestimonialData from "./TestimonialData";
import "./testimonials.css";

const Testimonial = () => {
  return (
    <section className="testimonial_section" id="testimonial">
      <h2 className="section__title">What our clients say</h2>
      <span className="testimonial__section-subtitle">
        Real Feedback. Real Trust.
      </span>
      <TestimonialData />
    </section>
  );
};

export default Testimonial;
