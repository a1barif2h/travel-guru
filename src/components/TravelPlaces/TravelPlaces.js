import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LocalContext } from "../../App";
import { placesInfo } from "../../fakeData/fakeData";
import TravelPlace from "../TravelPlace/TravelPlace";

const TravelPlaces = () => {
  const [showPlace, setShowPlace] = useContext(LocalContext);
  const containerStyle = {
    marginTop: "70px",
  };
  const linkStyle = {
    textDecoration: "none",
    color: "#000000",
  };
  return (
    <Container style={containerStyle}>
      <Row>
        <Col className="ml-auto " md={3}>
          <h1 className="text-white" style={{ fontSize: "50px" }}>
            {showPlace.title}
          </h1>
          <p className="text-white" style={{ fontWeight: "600" }}>
            {showPlace.description}
          </p>
          <Link style={linkStyle} to="/booking">
            <Button variant="warning">Booking</Button>
          </Link>
        </Col>
        <Col style={{ display: "flex" }} md={9}>
          {placesInfo.map((place) => (
            <TravelPlace key={place.id} place={place} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default TravelPlaces;
