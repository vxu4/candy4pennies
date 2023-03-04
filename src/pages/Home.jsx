import React, { useContext } from "react";
import { AppContext } from "../App";
import Window from "../components/window";
import PawtucketLocation from "./Locations/PawtucketLocation";
import Alphabets from "./Locations/Alphabets";
import TextWindow from "./Home/TextWindow";
import NewLocation from "./Home/NewLocation";

import "../App.css";
import "98.css";

const Home = ({}) => {
  return (
    <>
      <Alphabets top="25%" left="20%" />
      <NewLocation top="5%" />
      <TextWindow left="65%" top="35%" />
    </>
  );
};

export default Home;
