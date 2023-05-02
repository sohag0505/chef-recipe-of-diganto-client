import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <Container>
      <div className="form-container">
        <form className="form-semi-container mx-auto mt-4 ">
          <div className="form-control p-4">
            <h2 className="text-center mt-2">Login</h2>
            <label className="d-block" htmlFor="email">
              Email
            </label>
            <input
              className="border rounded"
              type="email"
              name="email"
              id=""
              required
            />
            <label className="d-block" htmlFor="password">
              Password
            </label>
            <input
              className="border rounded"
              type="password"
              name="password"
              id=""
              required
            />
            <input className="btn-submit mt-4" type="submit" value="Login" />
            <p className="text-center">
              <small>
                New User? <Link to="/registation">Create New Account</Link>
              </small>
            </p>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
