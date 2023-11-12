import React, { useRef} from "react";
import { FiMenu } from "react-icons/fi";
import { TiCancel } from "react-icons/ti";

export default function Navbar() {
  const navRef = useRef();

  function showNavbar() {
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    
      <div class="header">
        <a href="#" class="logo">
          LemoB.
        </a>
        <nav ref={navRef}class="navbar">
          <a href="#" class="active">
            Home
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#">Portfolio</a>
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
