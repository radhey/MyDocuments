import "./styles.css";

import { useState } from "react";

export default function App() {
  const [selectedTitle, setSelectedTitle] = useState(null);
  const menuConfig = [
    {
      title: "Home",
    },
    {
      title: "Services",
      subItems: ["Cooking", "Cleaning"],
    },
    {
      title: "Contact",
      subItems: ["Phone", "Mail"],
    },
  ];

  const clickTitle = (i) => {
    setSelectedTitle(i);
  };

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        {menuConfig.map((item, i) => (
          <div
            key={i}
            onClick={() => clickTitle(i)}
            style={{ marginRight: "10px" }}
          >
            {item.title}
            <div style={{ display: i === selectedTitle ? "block" : "none" }}>
              {item.subItems &&
                item.subItems.map((subItem, j) => <p key={j}>{subItem}</p>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
//////////////////////////////////////////////////////////////////

import React, {useState} from "react";
const Menu = () => {
  const [menuConfig, setMenuConfig] = useState([
    {
      title: "Home",
    },
    {
      title: "Services",
      subItems: ["Cooking", "Cleaning"],
    },
    {
      title: "Contact",
      subItems: ["Phone", "Mail"],
    },
  ]);
  const [activeMenu, setActiveMenu] = useState();
  return(<ul>
    {menuConfig.map((val, ind) => {
      return <li onClick={()=>setActiveMenu(ind)}>
        {val.title}
        {activeMenu === ind && <ul>
          {val.subItems && val.subItems.map((val) => {
            return(<li>
              {val}
            </li>);
          })}  
        </ul>}
      </li>
    })}
  </ul>);
}

export default Menu;