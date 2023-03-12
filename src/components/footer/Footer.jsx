import React from 'react'
import Social from '../header/Social';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer container">
            <Social />
            <span className="footer__copy">&#169; AB Garage Doors. All rigths reserved</span>
            <span className="footer_developedby">Designed & Developed by <a href="https://paalvarador.github.io" target="_blank" rel="noreferrer">paalvarador</a></span>
        </div>
    </footer>
  )
}

export default Footer