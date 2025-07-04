import { useState } from 'react';
import companyLogo from "./../../assets/ab_logo.png";
import usaFlag2 from './../../assets/usa-flag-2.gif';
import ContactData from './ContactData';
import "./header.css";
import Social from './Social';

const Header = () => {

    const [Toggle, showMenu] = useState(false);

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
                    <img src={usaFlag2} alt='Happy Independence Day' className='usaFlag2' width={105} style={{ marginLeft: 10 }} />
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