import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Registation = () => {
  return (
    <Container>
      <div className="form-container">
        <form className="form-semi-container mx-auto mt-4 ">
          <div className="form-control p-4">
            <h2 className="text-center mt-2">Registation</h2>
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
            <label className="d-block" htmlFor="password">
              Confirm Password
            </label>
            <input
              className="border rounded"
              type="password"
              name="confirm"
              id=""
              required
            />
            <input type="file" name="file" id="" />
            <input type="url" name="url" id="" />
            <input
              className="btn-submit mt-4"
              type="submit"
              value="Registation"
            />
            <p className="text-center">
              <small>
                Already have an account? <Link to="/login">Login</Link>
              </small>
            </p>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Registation;
