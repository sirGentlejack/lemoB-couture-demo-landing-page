import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
   onAuthStateChanged
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../Components/firebase";

export default function Signin() {
  const [isSigningUp, setIsSigningUp] = useState(true);

  //   for signin authetication
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //   to toggle between forms
  const toggleForm = () => {
    setIsSigningUp(!isSigningUp);
  };

  //   form authetication
  
  const auth = getAuth(app);

  const handleAuthentication = async (e) => {
    e.preventDefault(); // Add this line to prevent default form submission behavior

    

    try {
      if (isSigningUp) {
        // sign up
        await createUserWithEmailAndPassword(auth, email, password);
        // Authentication successful, you can redirect or perform additional actions here
        navigate("/successful"); // Redirect to the success page
      } else {
        // sign in
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.error("Authentication Error: ", error.message);
    }

    // Clear the form fields after authentication attempt
    setFullName("");
    setEmail("");
    setPassword("");
  };

  //   to check if user is signed in
onAuthStateChanged(auth, (user) => {
  if (user) {
    navigate("/dashboard"); // Redirect to the dashboard
  } else {
    navigate("/signin"); // Redirect to the signin page
  }
});

  return (
    <div className="signin-page">
      {isSigningUp ? (
        // signup
        <div className="signup">
          <h2 className="signin-header">Sign Up</h2>
          <form className="signin-form" onSubmit={handleAuthentication}>
            <input
              type="text"
              placeholder="Full name"
              className="signin-input"
              id="fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email address"
              className="signin-input"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="signin-input"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <input type="checkbox" style={{ cursor: "pointer" }} />
              <p>I accept all terms & condition</p>
            </div>
            <button type="submit" className="signin-btn">
              <strong>Sign Up</strong>
            </button>
          </form>

          <h2 className=" signin-link">
            <span onClick={toggleForm} style={{ cursor: "pointer" }}>
              Sign In
            </span>
          </h2>
        </div>
      ) : (
        // signin
        <div>
          <h2 className="signup-link">
            <span
              onClick={toggleForm}
              style={{ cursor: "pointer", color: "whitesmoke" }}
            >
              Sign Up
            </span>
          </h2>

          <div className="signin">
            <h2 className="signin-header">Sign In</h2>
            <form className="signin-form" onSubmit={handleAuthentication}>
              <input
                type="text"
                placeholder="Email address"
                className="signin-input"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="signin-input"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>
                <scan style={{ cursor: "pointer", color: "blue" }}>
                  Forgot password ?
                </scan>
              </p>
              <button type="submit" className="signin-btn">
                <strong>Sign In</strong>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
