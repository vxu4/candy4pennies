import React, { useContext } from "react";
import { AppContext } from "../App";
import Window from "../components/window";
import "../App.css";
import "98.css";

const Products = ({}) => {
  const gridItemWidth = "10%";
  const gridItemHeight = "15%";

  return (
    <>
      <Window title="Loose Candies" top="15%" left="15%">
        <div
          style={{
            gap: "10px",
            display: "flex",
            width: "fit-content",
            flexDirection: "column",
            backgroundColor: "pink",
            padding: "10px",
          }}
        >
          <div style={{ gap: "10px", width: "100%", display: "flex" }}>
            <img
              alt="candy in clear container"
              style={{ width: gridItemWidth, height: gridItemHeight }}
              src={process.env.PUBLIC_URL + "/Products/25-01.png"}
            />
            <img
              alt="candy in clear container"
              style={{ width: gridItemWidth, height: gridItemHeight }}
              src={process.env.PUBLIC_URL + "/Products/25-02.png"}
            />
            <img
              alt="candy in clear container"
              style={{ width: gridItemWidth, height: gridItemHeight }}
              src={process.env.PUBLIC_URL + "/Products/25-07.png"}
            />
            <img
              alt="candy in clear container"
              style={{ width: gridItemWidth, height: gridItemHeight }}
              src={process.env.PUBLIC_URL + "/Products/25-08.png"}
            />
          </div>
          <div style={{ gap: "10px", display: "flex" }}>
            <img
              alt="candy in clear container"
              style={{ width: gridItemWidth, height: gridItemHeight }}
              src={process.env.PUBLIC_URL + "/Products/25-05.png"}
            />
            <img
              alt="candy in clear container"
              style={{ width: gridItemWidth, height: gridItemHeight }}
              src={process.env.PUBLIC_URL + "/Products/25-06.png"}
            />
            <img
              alt="candy in clear container"
              style={{ width: gridItemWidth, height: gridItemHeight }}
              src={process.env.PUBLIC_URL + "/Products/25-03.png"}
            />
            <img
              alt="candy in clear container"
              style={{ width: gridItemWidth, height: gridItemHeight }}
              src={process.env.PUBLIC_URL + "/Products/25-04.png"}
            />
          </div>
        </div>
      </Window>
      <Window title="Gift baskets">
        <img src={process.env.PUBLIC_URL + "/Products/GiftBasket.png"} />
      </Window>
      <Window title="Gift baskets" top="20%" left="60%">
        <img
          src={process.env.PUBLIC_URL + "/Products/GiftBasket_boxBear.jpeg"}
        />
      </Window>
      <Window title="Gift baskets" top="10%" left="40%">
        <img
          src={process.env.PUBLIC_URL + "/Products/GiftBasket_blueBear.jpeg"}
        />
      </Window>
    </>
  );
};

export default Products;
