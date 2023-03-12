import React from 'react';
import AboutInfo from './AboutInfo';
import AboutService from './AboutService';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Who Whe Are</h2>
      <span className="section__subtitle">All About Us</span>
      <AboutInfo />
      <AboutService />
    </section>
  )
}

export default About