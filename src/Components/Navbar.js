import React, { useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { TiCancel } from "react-icons/ti";
import { Link } from "react-router-dom";
import Lemob from "../images/Lemob.png";
import { IoIosPerson } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default function Navbar({ isAuthenticated }) {
  const navRef = useRef();

  function showNavbar() {
    navRef.current.classList.toggle("responsive_nav");
  }

  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/signin");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      {/* mobile screens */}
      <div className="header mobile-header">
        <img
          src={Lemob}
          alt="lemob logo"
          width="50vw"
          style={{ marginLeft: " 20px" }}
        />

        <nav ref={navRef} className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {isAuthenticated ? (
            <>
             <div className="tooltip" onClick={handleLogout}>
              <FaSignOutAlt
                className="tooltip signin-icon"
                onClick={handleLogout}
              />
              <span className="tooltiptext">Sign Out</span>
            </div>
            </>
          ) : (
            <>
              <div className="tooltip">
                <Link to="/signin">
                  <IoIosPerson className="signin-icon" />
                </Link>
                <span className="tooltiptext">Login / Register</span>
              </div>
            </>
          )}
          <button className="navbar_btn navbar_close">
            <TiCancel onClick={showNavbar} />
          </button>
        </nav>
        <button className="navbar_btn">
          <FiMenu onClick={showNavbar} />
        </button>
      </div>


      {/* wide screens */}
      <div className="header2 wide-header">
        <img src={Lemob} alt="lemob logo" width="80vw" />
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {isAuthenticated ? (
          <>
            <div className="tooltip" onClick={handleLogout}>
              <FaSignOutAlt
                className="tooltip signin-icon"
                
              />
              <span className="tooltiptext">Sign Out</span>
            </div>
          </>
         ) : ( 
          <>
            <div className="tooltip">
              <Link to="/signin">
                <IoIosPerson className="signin-icon" />
              </Link>
              <span className="tooltiptext">Login / Register</span>
            </div>
          </>
         )} 
      </div>
    </>
  );
}
