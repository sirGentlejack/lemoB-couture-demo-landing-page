import React from "react";
import kaftan from "../images/BlueFatherSonKaftan.jpg";

export default function Fashion() {
  return (
    <div className="fashion1 ">
      <div className="scroll-container">
        <p className="bottom-para">
          <i>
            <b>
              Welcome to a world where fashion meets craftsmanship. Welcome to
              LemoB Couture.
            </b>
          </i>
        </p>
      </div>
      <div className="fashion2">
        <div className="fashion-text">
          <h1>Fashion is life!</h1>
          <p>
            lorem Powtoon: Video Maker | Make Videos and Animations Online
            Powtoon https://www.powtoon.com Make videos in minutes with Powtoon.
            Use our library of styles, characters, backgrounds and video, or
            upload your own! Free. Easy. Awesome. Sign up today!
          </p>
        </div>
        <div className="fashion-img-box">
          <img src={kaftan} alt="" className="fashion-img" />
        </div>
      </div>
    </div>
  );
}
