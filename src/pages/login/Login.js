import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import "./Login.css";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // Logged in, redirect to HomePage
        history.push('/')
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Create a user and looged in, redirect to homepage
        history.push('/')
      })
      .catch((e) => alert(e.message));
  };
  return (
    <>
      <div className="login">
        <Link to="/" >
          <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="logo" />
        </Link>
        <div className="login__container">
          <h1>Sign in</h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={login}
              type="submit"
              className="login__signInButton"
            >
              Sign In
            </button>
            <p className="text">
              By signing-in your agree to company's Conditions of Use & Sale.
              Please see our Privacy Notice, our Cookies Notice and our internet
              based Ads Notice.
            </p>
            <button onClick={register} className="login__signUpButton">
              Create your Amazon Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
