import React, { useRef} from "react";
import { FiMenu } from "react-icons/fi";
import { TiCancel } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navRef = useRef();

  function showNavbar() {
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    
      <div className="header">
        <a href="#" className="logo">
          LemoB.
        </a>
        <nav ref={navRef}className="navbar">
        <ul>
          <li>
            <Link to="/" >Home</Link>
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
          <button className="navbar_btn navbar_close">
            <TiCancel onClick={showNavbar} />
          </button>
        </nav>
        <button className="navbar_btn">
          <FiMenu onClick={showNavbar} />
        </button>
      </div>

    
  );
}
