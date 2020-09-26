import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firbase.config";
import Booking from "./components/Booking/Booking";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import StartBooking from "./components/StartBooking/StartBooking";
import Login from "./components/Login/Login";

export const LocalContext = createContext();

firebase.initializeApp(firebaseConfig);

function App() {
  const [showPlace, setShowPlace] = useState({
    id: 1,
    title: "Sajek Valley",
    description:
      "Sajek Valley - সাজেক ভ্যালি / মেঘের উপত্যকায় জীবন is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 1,476 feet above sea level. Sajek valley is known as the Queen of Hills & Roof of Rangamati.",
    imgUrl: "https://i.ibb.co/vP1fzwx/Rectangle-1.png",
  });

  const [loggedInUser, setLoggedInUser] = useState(false);
  const [userDetails, setUserDetails] = useState("user");
  return (
    <LocalContext.Provider
      value={[
        showPlace,
        setShowPlace,
        loggedInUser,
        setLoggedInUser,
        userDetails,
        setUserDetails,
      ]}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/booking">
            <Booking />
          </Route>
          <PrivateRoute exact path="/booking/start-booking">
            <StartBooking />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </LocalContext.Provider>
  );
}

export default App;
