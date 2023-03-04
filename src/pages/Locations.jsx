import React from "react";
import OGLocation from "./Locations/OGLocation";
import PawtucketLocation from "./Locations/PawtucketLocation";
import Alphabets from "./Locations/Alphabets";

import "../App.css";
import "98.css";

const Locations = () => {
  return (
    <>
      <OGLocation top="30%" left="50%" />
      <Alphabets top="25%" left="20%" />
      <PawtucketLocation top="10%" />
    </>
  );
};

export default Locations;
