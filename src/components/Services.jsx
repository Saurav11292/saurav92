import { useEffect, useState } from 'react';
import React from 'react';
import './Services.scss';
import List from './List';
import {
  webServices,
  mobileServices
} from "../data"

export default function Services() {
  const [selected, setSelected] = useState("webapp");
  const [data, setData] = useState([]);
  const list = [
    { id: "webApp",
      title: "Web App",
    },
    { id: "mobileApp",
      title: "Mobile App",
    },
    { id: "design",
      title: "Design",    
    },
  ];

  useEffect(() => {

    switch (selected) {
     default : case "webApp":
        setData(webServices);
        break;
      case "mobileApp":
        setData(mobileServices);
        break;
    }

  },[selected])
  
  return (
    <div className="servicescontainer" id="services">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <List
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" onClick={(e) => {
            window.open(d.link)
          }}>
              {/* <img src={d.img} alt="not found" /> */}
              <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
