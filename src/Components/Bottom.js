import React from "react";
// import SocialContacts from "./SocialContacts";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Bottom() {
  return (
    <div className="footer">
      <form id="contact">
        <fieldset>
          <legend className="Gallery">Reach out to US!</legend>
          <input type="Email" className="input" placeholder="Email" />
          <br />
          <textarea className="input" placeholder="Comments"></textarea>
          <br />
          <button type="submit" className="input_btn">
            Send
          </button>
        </fieldset>
      </form>
      
      <div>
        <h3 className="sub_heading">Contact us:-</h3>
        <div className=" bottom-socials">
          <div className="home-sci ">
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
    </div>
  );
}
