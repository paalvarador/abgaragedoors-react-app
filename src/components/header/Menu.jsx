import axios from 'axios';
import { useEffect, useState } from 'react';

const Menu = (props) => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/menus")
            .then(res => {
                setMenus(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    return (
    
        <div className={props.toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list">
                {menus.map((menu) => (<li key={menu._id} className="nav__item"><a href={menu.link} className="nav__link">{menu.name}</a></li>))}
            </ul>
        </div>
    )
}

export default Menu
