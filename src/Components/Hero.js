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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
          molestias. Quam aliquid, quaerat, itaque, dolore perferendis earum
          reiciendis animi inventore voluptatum sed beatae deserunt quod sint
          tenetur? Facilis sint, dolorum voluptates doloribus praesentium, et
          dolores sapiente corrupti, qui esse facere excepturi asperiores
          numquam culpa itaque omnis animi blanditiis delectus autem?
        </p>
        <div class="btn-box">
          <a href="#contact" target="_self" rel="noreferrer">
            Order now
          </a>
          <a href="#gallery" target="_self" rel="noreferrer">
            Gallery
          </a>
        </div>
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

      <span class="home-imghover">
        <img src={Lemob} alt="lemob logo" width="450vw" />
      </span>
    </section>
  );
}
