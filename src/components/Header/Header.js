import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import logo from "../../images/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar
            className="mt-4 "
            style={{ marginLeft: "30px", marginRight: "30px" }}
            expand="lg"
          >
            <Navbar.Brand className="logo mr-md-5 ml-md-5" href="/home">
              <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form className="ml-sm-5" inline>
                <FormControl
                  style={{
                    background: "transparent",
                    color: "white",
                  }}
                  type="text"
                  placeholder="Search your Destination..."
                  className="mr-sm-2 mr-sm-5"
                />
              </Form>
              <Nav className="ml-5 ">
                <Nav.Link className="text-white mr-5" href="/news">
                  News
                </Nav.Link>
                <Nav.Link className="text-white mr-5" href="/destination">
                  Destination
                </Nav.Link>
                <Nav.Link className="text-white mr-5" href="/blog">
                  Blog
                </Nav.Link>
                <Nav.Link className="text-white mr-5" href="/contact">
                  Contact
                </Nav.Link>
              </Nav>
              <Button className="login-button ml-sm-3" variant="warning">
                Login
              </Button>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
