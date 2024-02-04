import React from "react";
import Bluekaftan from "../images/BlueKaftan.jpg";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section class="hero">
      <div class="hero-content">
        <h1>LemoB Couture</h1>
        <h3>Crafting Elegance, Tailoring Style.</h3>
        <p>
          <p>
            Welcome to LemoB Couture, where every stitch is a statement and
            style is an art. Discover bespoke tailoring that transcends trends,
            fits like a dream, and reflects your unique persona.
          </p>
          <b>Why Choose Us?</b>
          <ul style={{listStyleType:"square",marginLeft:"30px"}}>
            <li> Impeccable Craftsmanship</li>
            <li> Unparalleled Fit</li>
            <li> Timeless Elegance</li>
          </ul>
          <hr style={{border:"2px dashed black",margin:"20px"}}/>
          <i>Explore Now. Elevate Your<span style={{color:"white"}}> Style.</span></i>
        </p>
        <div class="btn-box">
          <Link to="/contact" >
            Order now
          </Link>
          <Link to="/gallery" >
            Explore
          </Link>
        </div>

        <div className="top-socials">
          <div class="hero-sci">
            <a href="/" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>

            <a href="/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <span class="hero-imghover">
        <img src={Bluekaftan} alt="lemob logo" width="400vw" />
      </span>
    </section>
  );
}
