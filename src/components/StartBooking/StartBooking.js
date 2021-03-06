import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { hotelsInfo } from "../../fakeData/fakeData";
import Header from "../Header/Header";
import HotelDetail from "../HotelDetail/HotelDetail";
import blackLogo from "../../images/BlackLogo.png";
import Map from "../Map/Map";

const StartBooking = () => {
  return (
    <div>
      <Header color="black" img={blackLogo} />
      <hr
        style={{
          border: "0",
          borderBottom: "1px solid #dddddd",
          marginTop: "-4px",
          width: "85%",
        }}
      />
      <Container>
        <Row>
          <Col md={6}>
            <h4>252 stays Apr 13-17 3 guests</h4>
            <h2>Stay in Cox’s Bazar</h2>
            {hotelsInfo.map((hotel) => (
              <HotelDetail key={hotel.id} hotel={hotel} />
            ))}
          </Col>
          <Col md={6}>
            <Map />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StartBooking;
