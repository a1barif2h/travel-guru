import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import blackLogo from "../../images/BlackLogo.png";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { LocalContext } from "../../App";
import * as firebase from "firebase/app";
import fbIcon from "../../images/fb.png";
import googleIcon from "../../images/google.png";

const Login = () => {
  const [
    showPlace,
    setShowPlace,
    loggedInUser,
    setLoggedInUser,
    name,
    setName,
  ] = useContext(LocalContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const inputStyle = {
    border: "0",
    borderBottom: "2px solid #dddddd",
  };
  return (
    <div>
      <Header color="black" img={blackLogo} />
      <Form
        style={{
          width: "570px",
          margin: "20px auto",
          border: "1px solid #dddddd",
          padding: "15px",
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <h2>Create an account</h2>
          <Form.Control
            style={inputStyle}
            type="text"
            placeholder="First Name"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            style={inputStyle}
            type="text"
            placeholder="Last Name"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            style={inputStyle}
            type="email"
            placeholder="Username or Email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            style={inputStyle}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            style={inputStyle}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        <Button style={{ width: "100%" }} variant="warning" type="submit">
          Create an account
        </Button>
      </Form>
      <div style={{ textAlign: "center" }}>
        <p>------------------ Or ------------------</p>
        <button
          style={{
            width: "540px",
            position: "relative",
            padding: "8px",
            border: "1px solid #dddddd",
            borderRadius: "25px",
            marginBottom: "15px",
            backgroundColor: "transparent",
          }}
        >
          {" "}
          <img
            style={{
              width: "30px",
              position: "absolute",
              left: "10px",
              bottom: "5px",
            }}
            src={fbIcon}
            alt=""
          />{" "}
          Continue with Facebook
        </button>
        <br />
        <button
          style={{
            width: "540px",
            position: "relative",
            padding: "8px",
            border: "1px solid #dddddd",
            borderRadius: "25px",
            backgroundColor: "transparent",
          }}
        >
          {" "}
          <img
            style={{
              width: "30px",
              position: "absolute",
              left: "10px",
              bottom: "5px",
            }}
            src={googleIcon}
            alt=""
          />{" "}
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
