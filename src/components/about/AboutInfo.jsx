import React, { useEffect, useState } from "react";
import axios from "axios";

function AboutInfo() {
  const [aboutInfo, setAboutInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://abgaragedoors-api-rest.vercel.app/api/about/all")
      .then((res) => {
        console.log(res);
        setAboutInfo(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="about__container">
      <div className="about__information__left">
        {aboutInfo.map((about) => {
          console.log(`about: ${JSON.stringify(about)}`);
          console.log(`description: ${about.description}`);
          const paragraphs = about.description
            .split("\n")
            .filter((p) => p.trim() !== "");
          console.log(`paragraphs: ${paragraphs}`);

          return (
            <div key={about._id} className="about_description">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {index === 0 ? <strong>{paragraph}</strong> : paragraph}
                </p>
              ))}
            </div>
          );
        })}
      </div>
      <div className="about__information__right">
        {aboutInfo.map((about) => (
          <img
            key={about._id}
            src={window.location.origin + "/" + about.image}
            className="about_image"
            alt="Imagen AB Garage Doors"
          />
        ))}
      </div>
    </div>
  );
}

export default AboutInfo;
