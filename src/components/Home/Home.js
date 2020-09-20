import React, { useContext } from "react";
import { LocalContext } from "../../App";
import Header from "../Header/Header";
import TravelPlaces from "../TravelPlaces/TravelPlaces";

const Home = () => {
  const [showPlace] = useContext(LocalContext);
  const homeStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                    url(${showPlace.imgUrl})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
  };
  return (
    <div style={homeStyle}>
      <Header color="white" />
      <TravelPlaces />
    </div>
  );
};

export default Home;
