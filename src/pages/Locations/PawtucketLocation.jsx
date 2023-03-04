import React from "react";
import Window from "../../components/window";
import "../../App.css";
import "98.css";

const PawtucketLocation = ({ top, left }) => {
  return (
    <Window title="Pawtucket location" top={top} left={left}>
      <div
        style={{
          padding: "33px",
          background: "linear-gradient(#76C56C, #9198e5)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div>
          <img
            style={{ position: "relative" }}
            alt="New Location sticker"
            src={
              process.env.PUBLIC_URL + "/Locations/GreenLocation_address.png"
            }
          />
        </div>
        <img
          // style={{ position: "absolute" }}
          alt="Green on Main storefront"
          src={process.env.PUBLIC_URL + "/Locations/GreenLocation_finalpng.png"}
        />
      </div>
    </Window>
  );
};

export default PawtucketLocation;
