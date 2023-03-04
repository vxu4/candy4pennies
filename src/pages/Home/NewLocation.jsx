import React from "react";
import Window from "../../components/window";
import "../../App.css";
import "98.css";

const NewLocation = ({ top, left }) => {
  return (
    <Window title="Pawtucket location" top={top} left={left}>
      <div
        style={{
          padding: "0px 66px 66px 0px",
          background: "linear-gradient(#9198e5, #76C56C)",
        }}
      >
        <img
          style={{ width: "600px" }}
          alt="Green on Main storefront"
          src={
            process.env.PUBLIC_URL + "/Locations/GreenLocation_NewLocation.png"
          }
        />
      </div>
    </Window>
  );
};

export default NewLocation;
