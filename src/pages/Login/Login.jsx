import React, { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import "./Login.css";

const Login = () => {
  const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const handleGoogleLogin = () => {
    setError("");
    googleLogin()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
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
            <p className="text-center mt-4">
              <small>
                New User? <Link to="/registation">Create New Account</Link>
              </small>
            </p>
            <Button
              onClick={handleGoogleLogin}
              className="btn-google mb-2"
              variant="outline-primary"
            >
              Login with Google
            </Button>
            <Button
              onClick={handleGithubLogin}
              className="btn-github"
              variant="outline-secondary"
            >
              Login with Github
            </Button>
          </div>
          {error && <p>{error}</p>}
        </form>
      </div>
    </Container>
  );
};

export default Login;
