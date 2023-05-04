// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";
import "./Header.css";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  return (
    <Container>
      <div className="text-center">
        <h1>Chef Recipe of Diganto</h1>
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
              <ActiveLink className="activeHome" to="/">
                Home
              </ActiveLink>
              <ActiveLink to="/blog">Blog</ActiveLink>
            </div>
            {!user && (
              <Nav>
                <Link className="text-decoration-none " to="/login">
                  Login
                </Link>
                <Link className="text-decoration-none ms-4" to="/registation">
                  Registation
                </Link>
              </Nav>
            )}
            {user && (
              <Nav>
                <img
                  src={user?.photoURL}
                  title={user?.displayName}
                  width={35}
                  height={35}
                  alt=""
                />
                <Button onClick={logOut} className="text-decoration-none ms-4">
                  Logout
                </Button>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
