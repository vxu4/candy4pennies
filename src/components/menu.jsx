import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import "../App.css";
import "98.css";

const Menu = ({}) => {
  const [open, setOpen] = useState(true);
  const { setDisplay } = useContext(AppContext);

  return (
    <>
      <div
        style={{
          // width: "",
          marginRight: "3vw",
          marginBottom: "9vh",
          position: "absolute",
          top: 33,
          left: 33,
        }}
        className="window"
      >
        {/* TITLE BAR */}
        <div className="title-bar" onClick={() => setOpen(!open)}>
          <div className="title-bar-text">Menu</div>
        </div>

        {/* BODY */}
        {open && (
          <div className="window-body" style={{ textAlign: "left" }}>
            <ul className="tree-view">
              <li>
                Menu
                <ul>
                  <li>
                    <button onClick={() => setDisplay("home")}>Home</button>
                  </li>
                  <li>
                    {/* <a>About</a> */}
                    <button onClick={() => setDisplay("about")}>About</button>
                  </li>
                  <li>
                    <button onClick={() => setDisplay("products")}>
                      Products
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setDisplay("locations")}>
                      Locations
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            ;
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
