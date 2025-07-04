import axios from "axios";
import { useEffect, useState } from "react";

function AboutInfo() {
  const [aboutInfo, setAboutInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://abgaragedoors-api-rest.vercel.app/api/about/all")
      .then((res) => {
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
          const paragraphs = about.description
            .split("\n")
            .filter((p) => p.trim() !== "");

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
