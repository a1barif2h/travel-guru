import React, { useContext } from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { LocalContext } from "../../App";
import "./TravelPlace.css";

const TravelPlace = (props) => {
  const { title, description, imgUrl } = props.place;
  const [showPlace, setShowPlace] = useContext(LocalContext);
  const handelTravelPlace = () => {
    setShowPlace(props.place);
  };
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${imgUrl})`,
  };
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <Card
            md={12}
            onClick={handelTravelPlace}
            style={backgroundStyle}
            style={{ width: "18rem" }}
            className="place-style"
          >
            <Card.Img
              style={{ position: "relative" }}
              variant="top"
              src={imgUrl}
            />
            <Card.Title
              style={{
                position: "absolute",
                bottom: "0px",
                left: "40px",
                fontSize: "40px",
                color: "#ffffff",
              }}
            >
              {title}
            </Card.Title>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TravelPlace;
