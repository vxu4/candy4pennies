import React, { useContext } from "react";
import { AppContext } from "../App";
import "../App.css";
import "98.css";

const WindowComponent = ({ onClick }) => {
  // const { display } = useContext(AppContext);
  // if (display) {
  return (
    <div>
      How much capacity for love water must have, <br />
      to carry generations in its memory. <br />
      <br />
      What love teachings can the water <br />
      carry back to us? <br />
      <br />
      {onClick && (
        <div
          className="field-row"
          style={{ justifyContent: "right", padding: "10px 0px 5px" }}
        >
          <button style={{ cursor: "pointer" }} onClick={onClick}>
            repeat
          </button>
        </div>
      )}
    </div>
  );
  // }
};

const Window = ({ onClick, title, children, top = "30%", left = "30%" }) => {
  return (
    <div
      style={{
        // width: "",
        marginRight: "3vw",
        marginBottom: "9vh",
        position: "absolute",
        top: top,
        left: left,
      }}
      className="window"
    >
      {/* TITLE BAR */}
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
      </div>

      {/* BODY */}
      <div className="window-body" style={{ textAlign: "right" }}>
        {children ? children : <WindowComponent onClick={onClick} />}
      </div>
    </div>
  );
};

export default Window;
