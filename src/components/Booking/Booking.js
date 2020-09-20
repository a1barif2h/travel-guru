import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useHistory } from "react-router-dom";
import { LocalContext } from "../../App";
import Header from "../Header/Header";
import "./Booking.css";

const Booking = () => {
  const history = useHistory();
  const [showPlace] = useContext(LocalContext);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  const formControl = (e) => {
    e.preventDefault();
    history.push("/booking/start-booking");
  };
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${showPlace.imgUrl})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    width: "100vw",
  };
  return (
    <div style={backgroundStyle}>
      <Header />
      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col md={6}>
            <h1 className="text-white" style={{ fontSize: "50px" }}>
              {showPlace.title}
            </h1>
            <p className="text-white" style={{ fontWeight: "600" }}>
              {showPlace.description}
            </p>
          </Col>
          <Col md={6}>
            <Form
              onSubmit={formControl}
              style={{ backgroundColor: "white", padding: "20px" }}
            >
              <Form.Group controlId="formGroupEmail">
                <Form.Label style={{ color: "#dddddd", fontWeight: "600" }}>
                  Origin
                </Form.Label>
                <Form.Control
                  style={{
                    color: "black",
                    fontWeight: "600",
                    border: "0",
                    outline: "0",
                    backgroundColor: "#dddddd",
                  }}
                  type="text"
                  placeholder="Enter Origin"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label style={{ color: "#dddddd", fontWeight: "600" }}>
                  Destination
                </Form.Label>
                <Form.Control
                  style={{
                    color: "black",
                    fontWeight: "600",
                    border: "0",
                    outline: "0",
                    backgroundColor: "#dddddd",
                  }}
                  type="text"
                  placeholder={showPlace.title}
                />
              </Form.Group>
              <Row>
                <Col style={{ marginRight: "100px" }}>
                  <p style={{ marginBottom: "-10px" }}>
                    <Form.Label style={{ color: "#dddddd", fontWeight: "600" }}>
                      Form
                    </Form.Label>
                  </p>
                  <ReactDatePicker
                    style={{
                      position: "relative",
                    }}
                    selected={from}
                    onChange={(date) => setFrom(date)}
                  />
                  <svg
                    style={{
                      position: "absolute",
                      right: "25px",
                      bottom: "8px",
                    }}
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-calendar-plus-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM8.5 8.5a.5.5 0 0 0-1 0V10H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V11H10a.5.5 0 0 0 0-1H8.5V8.5z"
                    />
                  </svg>
                </Col>
                <Col>
                  <p style={{ marginBottom: "-10px" }}>
                    <Form.Label style={{ color: "#dddddd", fontWeight: "600" }}>
                      To
                    </Form.Label>
                  </p>
                  <ReactDatePicker
                    style={{
                      position: "relative",
                    }}
                    selected={to}
                    onChange={(date) => setTo(date)}
                  />
                  <svg
                    style={{
                      position: "absolute",
                      right: "25px",
                      bottom: "8px",
                    }}
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-calendar-plus-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM8.5 8.5a.5.5 0 0 0-1 0V10H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V11H10a.5.5 0 0 0 0-1H8.5V8.5z"
                    />
                  </svg>
                </Col>
              </Row>
              <input
                className="bg-warning"
                style={{
                  width: "100%",
                  marginTop: "10px",
                  padding: "10px",
                  fontWeight: "600",
                  border: "0",
                }}
                type="submit"
                value="Start Booking"
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
