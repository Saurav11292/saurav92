import React from "react";
import "./Sidebar.scss";

export default function sidebar({ menuOpen, setMenuOpen }) {
    
    return (
      <div>
        {menuOpen ? (
          <div className={"sidebar"}>
            <ul>
              <li onClick={() => setMenuOpen(false)}>
                <a href="#intro">Home</a>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <a href="#about">About</a>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <a href="#services">Projects</a>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
}
