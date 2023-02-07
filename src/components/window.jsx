import React, { useContext } from "react";
import { AppContext } from "../App";
import "../App.css";
import "98.css";

const WindowComponent = ({ onClick }) => {
  // const { display } = useContext(AppContext);
  // if (display) {
  return (
    <div
      style={{
        width: "500px",
        marginRight: "3vw",
        marginBottom: "9vh",
        position: "absolute",
      }}
      className="window"
    >
      {/* TITLE BAR */}
      <div className="title-bar">
        <div className="title-bar-text">Transmissions: </div>
      </div>

      {/* BODY */}
      <div className="window-body" style={{ textAlign: "right" }}>
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
    </div>
  );
  // }
};

const Window = ({ onClick }) => {
  return <WindowComponent onClick={onClick} />;
};

export default Window;
