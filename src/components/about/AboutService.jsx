import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AboutService() {
    const [aboutService, setAboutService] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/service/all")
            .then(res => {
                console.log(res);
                setAboutService(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);
  return (
    <div className="about__service">
        {
            aboutService.map((service) => (
                <div key={service._id} className="about__service__box"><img src={service.image} className="about__service__img" alt={"Service " + service.name}/><h3 className="about__service__title">{service.name}</h3><span className="about__service__subtitle">{service.description}</span></div>
            ))
        }
    </div>
  )
}

export default AboutService