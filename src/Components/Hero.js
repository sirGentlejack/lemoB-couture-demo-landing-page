import React from "react";
import Lemob from "../images/Lemob.png";
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
          <ul style={{listStyleType:"square"}}>
            <li> Impeccable Craftsmanship</li>
            <li> Unparalleled Fit</li>
            <li> Timeless Elegance</li>
          </ul>
          <hr style={{border:"5px dashed white",margin:"20px"}}/>
          <i>Explore Now. Elevate Your Style.</i>
        </p>
        <div class="btn-box">
          <Link href="#contact" target="_self" rel="noreferrer">
            Order now
          </Link>
          <Link href="#gallery" target="_self" rel="noreferrer">
            Explore
          </Link>
        </div>

        <div className="top-socials">
          <div class="hero-sci">
            <Link href="#" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </Link>

            <Link href="#" target="_blank" rel="noreferrer">
              <FaInstagram />
            </Link>
            <Link href="#" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>

      <span class="hero-imghover">
        <img src={Lemob} alt="lemob logo" width="400vw" />
      </span>
    </section>
  );
}
