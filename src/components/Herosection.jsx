import React from 'react';
import './Herosection.scss';
import Image from "../asset/image1.png"
import Image2 from "../asset/downarrow.png";
import { init } from "ityped";
import { useEffect, useRef } from 'react';

export default function Herosection() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { showCursor: true, backDelay: 1500, strings: ["Graphic Designer", "UX Designer", "Front End Developer"], });
}, []);


  return (
    <div className="herocontainer" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Image} alt="notfound" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>
            Hi! I am <span ref={textRef}></span>
          </h2>
          <h1>SAURAV VERMA</h1>
          <h3>Welcome to my Portfolio</h3>
        </div>
        <a href="#services">
          <img src={Image2} alt="not found" />
        </a>
      </div>
    </div>
  );
}
