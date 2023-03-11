import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = (props) => {
    const [menus, setMenus] = useState([]);


    console.log("Valor de Toogle = " + props.nombre);


    useEffect(() => {
        axios
            .get("http://localhost:3000/api/menus")
            .then(res => {
                console.log(res);
                setMenus(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    return (
    
        <div className={props.toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
                {menus.map((menu) => (<li key={menu._id} className="nav__item"><a href={menu.link} className="nav__link">{menu.name}</a></li>))}
            </ul>
        </div>
    )
}

export default Menu
