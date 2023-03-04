import React, { useContext } from "react";
import { AppContext } from "../App";
import Window from "../components/window";
import "../App.css";
import "98.css";

const About = ({}) => {
  return (
    <>
      <Window title="About us" top="10%" left="30%" width="50%">
        <div
          style={{
            padding: "10px",
            background: "linear-gradient(#fff, #9198e5)",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <p>
            From the moment you step in, you will be awestruck! By a rainbow of
            colors and the sweet smell of candy of all different shapes and
            sizes. The walls are lined with buckets of candy and an array of
            carefully handpicked chocolates! We have thousands of candies and
            sweets to choose from, offering an unparalleled range of candies,
            novelties, chocolates, gummies n’ jellies, gourmet popcorn, hard
            candy, soft taffy, and uniquely assorted merchandising! \nDesigned
            for both young and old, there are special areas to immerse and
            interact throughout the store. We also offer customized gift baskets
            and gifting assortments! \nWe believe that Candy4Pennies is the most
            mind-boggling, fun-filled place you will ever visit when it comes to
            satisfying your sweet tooth! We celebrate sweets, culture, music,
            art, and creativity in a way that will give you memories for life.
            \nMost importantly, everyone is welcome here. So come on in and join
            the fun!
          </p>
          <img
            alt="Snoop and fam"
            style={{ width: "300px" }}
            src={process.env.PUBLIC_URL + "/About/FamPhoto.JPG"}
          />
        </div>
      </Window>
      <Window title="Store card" top="40%" left="25%">
        <img
          alt="Business card for candy 4 pennies"
          src={process.env.PUBLIC_URL + "/About/StoreCard.jpeg"}
        />
      </Window>
      {/* <Window title="Gift baskets" top="10%" left="40%">
        <img src={process.env.PUBLIC_URL + "/GiftBasket_blueBear.jpeg"} />
      </Window> */}
    </>
  );
};

export default About;
