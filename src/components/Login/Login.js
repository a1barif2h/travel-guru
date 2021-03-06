import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import blackLogo from "../../images/BlackLogo.png";
import { Col, Container, Form, Row } from "react-bootstrap";
import { LocalContext } from "../../App";
import * as firebase from "firebase/app";
import "firebase/auth";
import fbIcon from "../../images/fb.png";
import googleIcon from "../../images/google.png";

const Login = () => {
  const [
    showPlace,
    setShowPlace,
    loggedInUser,
    setLoggedInUser,
    userDetails,
    setUserDetails,
  ] = useContext(LocalContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useState({});
  const [confirmationError, setConfirmationError] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [submitUser, setSubmitUser] = useState("");
  const [verified, setVerified] = useState("null");
  const [verifyMessage, setVerifyMessage] = useState(false);

  const handelSubmit = (event) => {
    event.preventDefault();
    //Signup with email and password
    if (submitUser === "signup") {
      user.password == user.confirmationPassword
        ? firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then((res) => {
              setConfirmationError(false);
              setUser({ ...user, signupError: "" });
              setIsSignUp(true);
              setVerifyMessage(true);
              const currentUser = firebase.auth().currentUser;
              currentUser.updateProfile({
                displayName: `${user.fname} ${user.lname}`,
              });
              currentUser.sendEmailVerification();
            })
            .catch((err) => {
              setUser({ ...user, signupError: err.message });
            })
        : setConfirmationError(true);
    }
    // Sign in with email and password
    if (submitUser == "signin") {
      setVerifyMessage(false);
      setUser({ ...user, signinError: "" });
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const currentUser = firebase.auth().currentUser;
          setUserDetails(currentUser.displayName);
          if (currentUser.emailVerified) {
            setLoggedInUser(true);
            history.replace(from);
          } else {
            currentUser.sendEmailVerification();
            setVerified("false");
          }
        })
        .catch((err) => {
          setUser({ ...user, signinError: err.message });
        });
    }
  };
  //Handel google sign in
  const handelGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const currentUser = firebase.auth().currentUser;
        setUserDetails(currentUser.displayName);
        setLoggedInUser(true);
        history.replace(from);
      })
      .catch((error) => {
        setUser({ ...user, error: error.massage });
      });
  };
  //Facebook sign in
  const handelFbSignIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const currentUser = firebase.auth().currentUser;
        setUserDetails(currentUser.displayName);
        setLoggedInUser(true);
        history.replace(from);
      })
      .catch((error) => {
        setUser({ ...user, error: error.massage });
      });
  };
  //Set send verification email
  const sendVerification = (email) => {
    firebase.auth().sendPasswordResetEmail(email);
  };
  //Toggle signup and login
  const handelSignUpToggle = () => {
    setIsSignUp(false);
    setUser({ ...user, signinError: "" });
  };
  const handelLoginToggle = () => {
    setIsSignUp(true);
    setConfirmationError(false);
    setUser({ ...user, signupError: "" });
  };
  const inputStyle = {
    border: "0",
    borderBottom: "2px solid #dddddd",
  };
  return (
    <div>
      <Header color="black" img={blackLogo} />
      <Form
        onSubmit={handelSubmit}
        style={{
          width: "570px",
          margin: "20px auto",
          border: "1px solid #dddddd",
          padding: "15px",
        }}
      >
        {verifyMessage && (
          <h5
            style={{
              textAlign: "center",
              width: "300px",
              margin: "auto",
              borderRadius: "25px",
              background: "#70C989",
              padding: "5px",
              color: "white",
            }}
          >
            Verification mail sent!
          </h5>
        )}
        {isSignUp ? <h2>Login</h2> : <h2>Create an account</h2>}
        {!isSignUp && (
          <>
            <Form.Group>
              <Form.Control
                onBlur={(event) =>
                  setUser({ ...user, fname: event.target.value })
                }
                name="firstName"
                required
                style={inputStyle}
                type="text"
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                onBlur={(event) =>
                  setUser({ ...user, lname: event.target.value })
                }
                name="lastName"
                required
                style={inputStyle}
                type="text"
                placeholder="Last Name"
              />
            </Form.Group>
          </>
        )}

        <Form.Group controlId="formBasicEmail">
          <Form.Control
            onBlur={(event) => setUser({ ...user, email: event.target.value })}
            name="email"
            required
            style={inputStyle}
            type="email"
            placeholder="Username or Email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            onBlur={(event) =>
              setUser({ ...user, password: event.target.value })
            }
            name="password"
            required
            style={inputStyle}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {!isSignUp && (
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              onBlur={(event) =>
                setUser({ ...user, confirmationPassword: event.target.value })
              }
              name="confirmationPassword"
              required
              style={inputStyle}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
        )}
        {isSignUp && (
          <Container>
            <Row className="d-flex justify-content-between">
              <Col>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
              </Col>
              <Col
                className="text-warning"
                style={{ cursor: "pointer", textAlign: "right" }}
                onClick={() => user.email && sendVerification(user.email)}
              >
                Forgot Password
              </Col>
            </Row>
          </Container>
        )}
        {user.signinError ? (
          <p style={{ color: "red", fontSize: "13px" }}>{user.signinError}</p>
        ) : (
          ""
        )}
        {user.signupError ? (
          <p style={{ color: "red", fontSize: "13px" }}>{user.signupError}</p>
        ) : (
          ""
        )}
        {!verified && (
          <p style={{ color: "red", fontSize: "13px" }}>
            Email Not verified ! Please check your mail.
          </p>
        )}
        {confirmationError ? (
          <p style={{ color: "red", fontSize: "13px" }}>
            Doesn't match your password
          </p>
        ) : (
          ""
        )}
        {isSignUp ? (
          <input
            name="signin"
            type="submit"
            value="Login"
            className="bg-warning"
            style={{
              cursor: "pointer",
              width: "100%",
              border: "0",
              fontWeight: "600",
              padding: "10px",
            }}
            onClick={(event) => setSubmitUser(event.target.name)}
          />
        ) : (
          <input
            name="signup"
            type="submit"
            value="Create an account"
            className="bg-warning"
            style={{
              cursor: "pointer",
              width: "100%",
              border: "0",
              fontWeight: "600",
              padding: "10px",
            }}
            onClick={(event) => setSubmitUser(event.target.name)}
          />
        )}
        {isSignUp ? (
          <Container>
            <Row style={{ textAlign: "center" }}>
              <Col>
                {" "}
                Don't have an account?
                <span
                  onClick={handelSignUpToggle}
                  style={{ cursor: "pointer" }}
                  className="text-warning"
                >
                  {" "}
                  Signup
                </span>
              </Col>
            </Row>
          </Container>
        ) : (
          <Container>
            <Row style={{ textAlign: "center" }}>
              <Col>
                {" "}
                Already have an account?
                <span
                  onClick={handelLoginToggle}
                  style={{ cursor: "pointer" }}
                  className="text-warning"
                >
                  {" "}
                  Login
                </span>
              </Col>
            </Row>
          </Container>
        )}
      </Form>
      <div style={{ textAlign: "center" }}>
        <p>------------------ Or ------------------</p>
        <button
          onClick={handelFbSignIn}
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
          onClick={handelGoogleSignIn}
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
