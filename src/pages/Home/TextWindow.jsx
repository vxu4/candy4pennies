import React from "react";
import Window from "../../components/window";
import "../../App.css";
import "98.css";

const TextWindow = ({ top, left }) => {
  return (
    <Window title="Grand Opening" top={top} left={left}>
      <div
        style={{
          padding: "0px 13px 33px 33px",
          background: "linear-gradient(#F27355, #ffffff)",
        }}
      >
        <img
          style={{ position: "relative", width: "300px" }}
          alt="Grand opening event details"
          src={process.env.PUBLIC_URL + "/Locations/GrandOpeningText.png"}
        />
        {/* <img
          style={{ position: "relative" }}
          alt="Alphabets ice cream sticker"
          src={process.env.PUBLIC_URL + "/Locations/GreenLocation_address.png"}
        /> */}
      </div>
    </Window>
  );
};

export default TextWindow;
