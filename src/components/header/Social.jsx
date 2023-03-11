import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Social() {
    const [socials, setSocials] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/social/all")
            .then(res => {
                console.log(res);
                setSocials(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div className="nav__social">
            <ul className="header__social">
                {socials.map((social) => (
                    <li key={social._id} className="nav__social-item"><a href={social.link} className="nav__social-link"><i class={social.name}></i></a></li>
                ))}
            </ul>
        </div>
    )
}

export default Social