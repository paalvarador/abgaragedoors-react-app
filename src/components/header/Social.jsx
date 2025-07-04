import axios from 'axios';
import { useEffect, useState } from 'react';

const Social = () => {
    const [socials, setSocials] = useState([]);

    useEffect(() => {
        axios
            .get("https://abgaragedoors-api-rest.vercel.app/api/social/all")
            .then(res => {
                setSocials(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <ul className="list__social">
            {socials.map((social) => (
                <li key={social._id} className="social__item"><a href={social.link} className="nav__social-link" target="_blank" rel="noreferrer"><i class={social.name}></i></a></li>
            ))}
        </ul>
    )
}

export default Social
