import React from "react";
import Window from "../../components/window";
import "../../App.css";
import "98.css";

const Alphabets = ({ top, left }) => {
  return (
    <Window title="Ice cream store" top={top} left={left}>
      <div
        style={{
          padding: "10px",
          background: "linear-gradient(#e66465, #9198e5)",
        }}
      >
        {/* <img
          style={{ position: "relative" }}
          alt="Alphabets ice cream sticker"
          src={process.env.PUBLIC_URL + "/Locations/AlphabetsSticker.svg"}
        /> */}
        <img
          // style={{ position: "absolute" }}
          alt="Green on Main storefront"
          src={process.env.PUBLIC_URL + "/Locations/Alphabets.jpeg"}
        />
      </div>
    </Window>
  );
};

export default Alphabets;
