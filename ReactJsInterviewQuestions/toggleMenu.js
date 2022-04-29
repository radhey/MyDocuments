import React, { useState, useEffect } from "react";
import "./style.css";

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

const styles = {
  li: { marginLeft: "15px", padding: "2px" },
};

export default function App() {
  const [myMenu, setMyMenu] = useState(menuConfig);

  function onExpandConfig(config) {
    const myMenuCopy = [...myMenu];

    myMenuCopy.forEach((menu) => {
      if (menu.title === config.title) {
        if (menu.expanded) {
          menu.expanded = false;
        } else {
          menu.expanded = true;
        }
      } else {
        menu.expanded = false;
      }
    });

    setMyMenu(myMenuCopy);
  }

  return (
    <div>
      {myMenu.map((config, index) => {
        return (
          <>
            <ul data-test-id={config.title + index}>
              {config.title}
              {config.subItems && config.subItems.length > 0 && (
                <button
                  data-test-id={`button-${config.title.toLowerCase()}`}
                  onClick={() => {
                    onExpandConfig(config);
                  }}
                >
                  {config.expanded ? "Hide" : "Expand"}
                </button>
              )}
              {config.subItems &&
                config.subItems.length > 0 &&
                config.expanded && (
                  <>
                    {config.subItems.map((item) => {
                      return (
                        <li
                          data-test-id={`li-${config.title.toLowerCase()}-${item.toLowerCase()}`}
                          style={styles.li}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </>
                )}
            </ul>
          </>
        );
      })}
    </div>
  );
}


///////////////////////////////////////////////////////////////////////

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


/////////////////////////////////////////////////////////
class Test extends React.Component {
  constructor(props){
    super(props);

    this.state = {
     services: [
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
        ],
       currentService: "Contact"
    }
  }

	
  render(){
  	const subItems = this.state.services.find(service=> service.title === this.state.currentService).subItems
    return (
      <div>        	
      {this.state.services.map(service=>(
      <div key={service.title}>
      <h1 onClick={()=>this.setState({currentService: service.title})}>{service.title}</h1>
      
        {this.state.currentService== service.title && !!subItems &&
        subItems.length &&
        subItems.map(item=> <h3 key={item}>{item}</h3>)}
        <br/>
       </div>
      ))
      
      }
      
      </div>
    )
  }
}
ReactDOM.render(<Test />, document.querySelector("#app"))
