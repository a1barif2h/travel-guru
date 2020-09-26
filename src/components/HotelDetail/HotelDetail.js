import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import starLogo from "../../images/star_1_.png";

const HotelDetail = (props) => {
  const {
    imgUrl,
    title,
    guest,
    bedroom,
    bed,
    bath,
    kitchen,
    cancellation,
    star,
    reviewed,
    price,
  } = props.hotel;
  return (
    <Container>
      <Row>
        <Col md={6}>
          <img style={{ width: "100%" }} src={imgUrl} alt="" />
        </Col>
        <Col md={6}>
          <Card
            style={{
              width: "18rem",
              padding: "0",
              border: "0",
              marginTop: "-20px",
            }}
          >
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <span>{guest} Guests</span> <span>{bedroom} bedrooms</span>{" "}
                <span>{bed} beds</span> <span>{bath} baths</span>
              </Card.Subtitle>
              <Card.Text>{kitchen}</Card.Text>
              <Card.Text style={{ marginTop: "-10px" }}>
                {cancellation}
              </Card.Text>
              <Card.Text style={{ marginTop: "-15px" }}>
                <img style={{ width: "6%" }} src={starLogo} alt="" />
                <span style={{ fontSize: "14px" }}>{star}</span>
                <span style={{ fontSize: "14px" }}> ({reviewed}) </span>
                <span style={{ fontWeight: "bold", marginLeft: "15px" }}>
                  ${price}/Night
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HotelDetail;
