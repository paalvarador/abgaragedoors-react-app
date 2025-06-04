import React, { useState } from "react";
import TestimonialData from "./TestimonialData";
import "./testimonials.css";
import ReviewModal from "../review-modal/ReviewModal";

const Testimonial = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="testimonial_section" id="testimonial">
      <h2 className="section__title">What our clients say</h2>
      <span className="testimonial__section-subtitle">
        Real Feedback. Real Trust.
      </span>
      <TestimonialData />

      <div className="review-button">
        <input
          type="hidden"
          onClick={() => setModalOpen(true)}
          value="Leave a Review"
          style={{ width: "180px", borderRadius: "10px" }}
        />
      </div>
      <ReviewModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Testimonial;
