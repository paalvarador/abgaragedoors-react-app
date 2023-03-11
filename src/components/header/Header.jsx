import React, {useState} from 'react'
import "./header.css";
import companyLogo from "./../../assets/ab_logo.png";
import Menu from './Menu';
import Contact from './Contact';
import Social from './Social';

const Header = () => {

    const [Toggle, showMenu] = useState(false);

    return (
        <header className="header">

            <nav className="company__information container">
                <div className="info__left">
                    <Contact />
                </div>
                <div className="info__right">
                    <Social />
                </div>
            </nav>
            <nav className="nav container">
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