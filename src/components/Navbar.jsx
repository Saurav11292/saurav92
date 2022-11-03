import React from 'react'
import './Navbar.scss';
// import Logo from '../asset/DREAMZ LOGO.png'
import {Person, Mail} from '@mui/icons-material'

export default function navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbarcontainer " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
        {/* <img src={Logo} alt="not found" /> */}
        <div className="left">
          <a href="#intro" className="logo">
            DREAMZ.
          </a>
          <div className="itemContainer">
            <Person />
            <span>+918870336304</span>
          </div>
          <div className="itemContainer">
            <Mail />
            <span>sv11292@gmail.com</span>
          </div>
          {/* <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a> */}
        </div>
      </div>
    </div>
  );
}
