import React, { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../Components/firebase";
import { FaGoogle } from "react-icons/fa";
import fashionbg from "../images/fashionbg1.jpg";
import fashionbg2 from "../images/fashionbg2.jpg";



export default function Signin({ setIsAuthenticated, setUser }) {
  const [isSigningUp, setIsSigningUp] = useState(true);

  //   for signin authetication
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // for image hover
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  //   to toggle between forms
  const toggleForm = () => {
    setIsSigningUp(!isSigningUp);
  };

  //   form authetication
  const handleAuthentication = async (e) => {
    e.preventDefault(); // Add this line to prevent default form submission behavior

    try {
      if (isSigningUp) {
        // sign up
        await createUserWithEmailAndPassword(auth, email, password);
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

  //   google authetication
  const handleGoogleAuthentication = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Signed in with Google");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error.message);
      });
  };

  //   to check if user is signed in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        navigate("/dashboard"); // Redirect to the dashboard
        setUser(user);
      } else {
        setIsAuthenticated(false);
        navigate("/signin"); // Redirect to the signin page
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth, setIsAuthenticated, setUser, navigate]);

  // image hover
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="signin-section">
      <img
        src={isHovered ? fashionbg : fashionbg2 }
        className="sigin-img"
        alt=""
        onMouseEnter={handleHover}
      />

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
                <button
                  onClick={handleGoogleAuthentication}
                  className="google-signin-btn"
                >
                  <FaGoogle /> Sign in with Google
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
