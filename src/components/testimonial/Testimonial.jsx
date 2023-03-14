import React from 'react'
import TestimonialData from './TestimonialData'
import "./testimonials.css"

const Testimonial = () => {
  return (
    <section className="testimonial_section" id="testimonial">
        <h2 className="section__title">Client<br/>Says</h2>
        <span className="section__subtitle">We Read Everyone</span>
        <TestimonialData />
    </section>
  )
}

export default Testimonial