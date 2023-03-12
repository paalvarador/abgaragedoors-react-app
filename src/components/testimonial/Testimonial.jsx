import React from 'react'
import TestimonialData from './TestimonialData'

const Testimonial = () => {
  return (
    <section className="testimonial section" id="testimonial">
        <h2 className="section__title">Client Says</h2>
        <span className="section__subtitle">We Read Everyone</span>
        <TestimonialData />
    </section>
  )
}

export default Testimonial