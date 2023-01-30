
import { useState } from 'react';
import React from 'react';
import './About.scss';
import Image from "../asset/octominds homepage.png"
import Image2 from "../asset/g4auto.png"
import Image3 from "../asset/easekode.png"
import LeftArrow from "../asset/LeftArrow.svg"
import RightArrow from "../asset/RightArrow.svg"



export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: 1,
      title: "OCTOMINDS",
      img: Image,
      description:
        "I got a project as a freelancer for Researching and Designing a project call OCTOMINDS this project was an E-learning website where the company provide knowledge one economy, world affairs, current affairs for kids from 6 to 14",
    },
    {
      id: 2,
      title: "G4AUTO",
      img: Image2,
      description:
        "After I left Octominds I moved to Bangalore and got a job in a company called REFIXD where I havebeen working for past 2 months. My first project was mobile app for G4Auto.",
    },
    {
      id: 3,
      title: "EASEKODE",
      img: Image3,
      description:
        "Right now Iam working on a a project called Easekode which provide bootcamp and online cources for developers.",
    },
    {
    id: 4,
    title: "Netflix-clone",
    description:
      "This is a Netfix clone I created with REACT JS",
  },
  ];
  const handleClick = (direction) => {
    direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <div className="aboutcontainer" id="about">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <h1>{d.title}</h1>
                    <p>{d.description}</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src={LeftArrow} className="leftArrow" alt="notfound" onClick={()=>handleClick("left")}/>
      <img src={RightArrow} className="rightArrow" alt="notfound" onClick={()=>handleClick("right")}/>
    </div>
  );
}
