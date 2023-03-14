import React, { useState } from 'react'
import "./header.css";
import companyLogo from "./../../assets/ab_logo.png";
import ContactData from './ContactData';
import Social from './Social';

const Header = () => {

    const [Toggle, showMenu] = useState(false);

    console.log("Toggle = " + Toggle);

    return (
        <header className="main_header_area">
            <div className="header_top_area">
                <div className="pull-left">
                    <ContactData />
                </div>
                <div className="pull-right">
                    <Social />
                </div>
            </div>
            <nav className="main_menu_area">
                <div className="nav__logo">
                    <img src={companyLogo} alt="Logo AB Garage Doors" className="logo" />
                </div>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#work" className="nav__link">Work</a>
                        </li>
                        <li className="nav__item">
                            <a href="#testimonial" className="nav__link">Testimonials</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">Contact</a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-list-ul"></i>
                </div>
            </nav>
        </header>

    )
}

export default Header