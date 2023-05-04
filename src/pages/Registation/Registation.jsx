import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Registation = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");

    if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            console.log(loggedUser);
            navigate("/");
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <Container>
      <div className="form-container">
        <form
          onSubmit={handleSubmit}
          className="form-semi-container mx-auto mt-4 "
        >
          <div className="form-control p-4">
            <h2 className="text-center mt-2">Registation</h2>
            <label className="d-block" htmlFor="name">
              Name
            </label>
            <input
              className="border rounded"
              type="text"
              name="name"
              id=""
              required
            />
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

            <label className="d-block" htmlFor="photo">
              Photo URL
            </label>
            <input
              className="border rounded"
              type="text"
              name="photo"
              id=""
              required
            />

            <input
              className="btn-submit mt-4"
              type="submit"
              value="Registation"
            />
            <p className="text-center mt-4">
              <small>
                Already have an account? <Link to="/login">Login</Link>
              </small>
            </p>
          </div>
          {error && <p className="text-danger">{error}</p>}
        </form>
      </div>
    </Container>
  );
};

export default Registation;
