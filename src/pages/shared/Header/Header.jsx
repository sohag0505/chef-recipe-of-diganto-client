// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <h1>Chef Recipe of Diganto</h1>
        <p>
          <small>Savar,Dhaka</small>
        </p>
      </div>

      <Navbar
        collapseOnSelect
        expand="lg"
        bg="info"
        variant="light"
        className="border rounded-1"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="#">Diganto</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="mx-auto">
              <Link className=" text-decoration-none" to="/">
                Home
              </Link>
              <Link className=" text-decoration-none ms-4" to="/blog">
                Blog
              </Link>
            </div>
            <Nav>
              <Link className="text-decoration-none " to="/login">
                Login
              </Link>
              <Link className="text-decoration-none ms-4" to="/registation">
                Registation
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
