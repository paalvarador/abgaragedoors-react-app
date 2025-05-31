import React from "react";
import WorkData from "./WorkData";
import "./work.css";

const Work = () => {
  return (
    <section className="work_section" id="work">
      <h2 className="section__title">
        Our
        <br />
        Work
      </h2>
      <span className="about_section-subtitle">Greate & Awesome Works</span>
      <WorkData />
    </section>
  );
};

export default Work;
