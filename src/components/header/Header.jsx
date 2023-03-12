import React, {useState} from 'react'
//import "./header.css";
import companyLogo from "./../../assets/ab_logo.png";
import Menu from './Menu';
import ContactData from './ContactData';
import Social from './Social';

const Header = () => {

    const [Toggle, showMenu] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <div className="nav__info">
                    <div className="info__left">
                        <ContactData />
                    </div>
                    <div className="info__right">
                        <Social />
                    </div>
                </div>
                <div className="nav__logo">
                    <img src={companyLogo} alt="Logo AB Garage Doors" className="logo" />
                </div>
                <Menu toggle={Toggle} />
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-list-ul"></i>
                </div>
            </nav>
        </header>

    )
}

export default Header