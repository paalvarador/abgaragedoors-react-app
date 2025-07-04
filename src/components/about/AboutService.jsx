import axios from 'axios';
import { useEffect, useState } from 'react';

function AboutService() {
    const [aboutService, setAboutService] = useState([]);

    useEffect(() => {
        axios
            .get("https://abgaragedoors-api-rest.vercel.app/api/service/all")
            .then(res => {
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
