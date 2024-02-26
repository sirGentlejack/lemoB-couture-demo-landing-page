import React from "react";
// import SocialContacts from "./SocialContacts";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Bottom() {
  return (
    <div className="bottom">
      
      <div className="bottom2">
        <div style={{ textAlign: "center" }}>
          <h2>Working Days</h2>
          <table style={{ width: "300px" }}>
            <tr>
              <th>
                <b>Days</b>
              </th>
              <th>
                <b>Time</b>
              </th>
            </tr>
            <tr>
              <td>Monday</td>
              <td>08:00 - 18:00</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>08:00 - 18:00</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>08:00 - 18:00</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>08:00 - 18:00</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>08:00 - 18:00</td>
            </tr>
            <tr>
              <td>Sarturday</td>
              <td>08:00 - 15:00</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>Closed</td>
            </tr>
          </table>
        </div>
        
        <div className="contact-us">
          <h3>Contact us</h3>
          <div className=" bottom-socials">
            <div className="hero-sci ">
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

        <div>
          <form className="bottom-form">
            <h2>News Letter </h2>
            <input type="Email" placeholder="Email" />
            <button>Send</button>
          </form>
        </div>
      </div>
      <p>© 2024 LemoB Couture</p>
    </div>
  );
}
