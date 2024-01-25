import React from "react";
import Lemob from "../images/Lemob.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section class="home">
      <div class="home-content">
        <h1>LemoB Couture</h1>
        <h3>Fashion Home</h3>
        <p>
        [Your Brand Name]
Crafting Elegance, Tailoring Style.

Welcome to [Your Brand Name], where every stitch is a statement and style is an art. Discover bespoke tailoring that transcends trends, fits like a dream, and reflects your unique persona.

Why Choose Us?
✨ Impeccable Craftsmanship
✨ Unparalleled Fit
✨ Timeless Elegance

Explore Now. Elevate Your Style.

[Explore Button]
        </p>
        <div class="btn-box">
          <a href="#contact" target="_self" rel="noreferrer">
            Order now
          </a>
          <a href="#gallery" target="_self" rel="noreferrer">
            Gallery
          </a>
        </div>

        <div className="top-socials">
          <div class="home-sci">
            <a href="#" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <span class="home-imghover">
        <img src={Lemob} alt="lemob logo" width="450vw" />
      </span>
    </section>
  );
}
