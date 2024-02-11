import React, { useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { TiCancel } from "react-icons/ti";
import { Link } from "react-router-dom";
import Lemob from "../images/Lemob.png";
import { IoIosPerson } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";

export default function Navbar({ isAuthenticated, onLogout }) {
  const navRef = useRef();

  function showNavbar() {
    navRef.current.classList.toggle("responsive_nav");
  }
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
            <div className="tooltip">
              <FaSignOutAlt
                className="tooltip signin-icon"
                onClick={onLogout}
              />
              <span className="tooltiptext">Sign Out</span>
            </div>
          </>
        ) : (
          <>
            <div className="tooltip">
              <Link to="/signin"  >
            <IoIosPerson className="signin-icon" />
            </Link>
              <span className="tooltiptext">Login / Register</span>
            </div>
          </>
        )}

          <div>
            <IoIosPerson className="tooltip" />
            <span className="tooltiptext">Login / Register</span>
          </div>
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
        {/* <div className="tooltip">
          <Link to="/signin"  >
            <IoIosPerson className="signin-icon" />
            </Link><span className="tooltiptext">Login / Register</span>
          </div>
          <div>
            <div className="tooltip">
            <FaSignOutAlt className="signin-icon" />
            <span className="tooltiptext">Sign Out</span>
            </div>
          </div>*/}

        {isAuthenticated ? (
          <>
            <div className="tooltip">
              <FaSignOutAlt
                className="tooltip signin-icon"
                onClick={onLogout}
              />
              <span className="tooltiptext">Sign Out</span>
            </div>
          </>
        ) : (
          <>
            <div className="tooltip">
              <Link to="/signin"  >
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
