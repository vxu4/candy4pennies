import React from "react";
import Window from "../../components/window";
import "../../App.css";
import "98.css";

const OGLocation = ({ top, left }) => {
  return (
    <Window title="Original Location" top={top} left={left}>
      <div
        style={{
          padding: "33px",
          background: "linear-gradient(#F27355, #ffffff)",
        }}
      >
        <img
          alt="Original storefront"
          src={process.env.PUBLIC_URL + "/Locations/OGLocation.png"}
        />
      </div>
    </Window>
  );
};

export default OGLocation;
