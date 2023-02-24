import React, { useContext } from "react";
import { AppContext } from "../App";
import Window from "../components/window";
import "../App.css";
import "98.css";

const Products = ({}) => {
  return (
    <>
      <Window title="Gift baskets">
        <img src={process.env.PUBLIC_URL + "/GiftBasket.png"} />
      </Window>
      <Window title="Gift baskets" top="20%" left="60%">
        <img src={process.env.PUBLIC_URL + "/GiftBasket_boxBear.jpeg"} />
      </Window>
      <Window title="Gift baskets" top="10%" left="40%">
        <img src={process.env.PUBLIC_URL + "/GiftBasket_blueBear.jpeg"} />
      </Window>
    </>
  );
};

export default Products;
