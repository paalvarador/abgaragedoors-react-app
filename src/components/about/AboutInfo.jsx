import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AboutInfo() {
    const [aboutInfo, setAboutInfo] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/about/all")
            .then(res => {
                console.log(res);
                setAboutInfo(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div className="about__container">
            <div className="about__information__left">
                {
                    aboutInfo.map((about) => (
                        <p key={about._id} className="about__description">{about.description}</p>
                    ))
                }
            </div>
            <div className="about__information__right">
                {
                    aboutInfo.map((about) => (
                        <img key={about._id} src={about.image} className="about__image__description" alt="Imagen AB Garage Doors"/>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutInfo