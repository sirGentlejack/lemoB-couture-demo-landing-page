import React, { useState } from "react";
import Data3 from "../Datas/Data3";
import Testimonials from "../Components/Testimonials";

export default function TestimonialsSection(props) {
  //   slider
  const [state, setState] = useState(0);

  const Next = () => {
    setState((state + 1) % Data3.length);
  };

  const Prev = () => {
    const newState = state - 1;
    setState(newState < 0 ? Data3.length - 1 : newState);
  };
  return (
    <div className="Testimonials" id="testimonials">
      <h3 className="sub_heading">Testimonials</h3>
      <div className="Testimonials-big-box">
        <button className="prev slider-btn" onClick={Prev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
          >
            <path
              d="M20.1901 8.09961L12.1296 16.16L20.1901 24.2205"
              stroke="#3D3D3D"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div className="card-list-3">
          <Testimonials key={Data3[state].id} item={Data3[state]} />
          <div className="circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="425"
              height="390"
              viewBox="0 0 425 390"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M205.637 1.11673C257.742 -0.452982 309.343 13.7363 348.539 48.0561C390.431 84.7369 417.697 135.309 422.228 190.763C427.162 251.151 419.094 318.369 373.932 358.829C330.007 398.18 264.466 389.428 205.637 384.804C153 380.666 100.139 370.664 61.903 334.302C22.788 297.104 -0.1883 244.674 1.59694 190.763C3.33127 138.39 32.6946 92.1151 71.1053 56.4141C108.008 22.1148 155.248 2.63478 205.637 1.11673Z"
                stroke="#000044"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="4 4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="379"
                height="361"
                viewBox="0 0 379 361"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M183.369 1.10801C229.918 -0.344383 276.016 12.7843 311.032 44.539C348.457 78.4782 372.815 125.27 376.863 176.58C381.272 232.455 374.063 294.648 333.718 332.084C294.477 368.494 235.924 360.396 183.369 356.118C136.345 352.289 89.1209 343.035 54.962 309.39C20.018 274.972 -0.508268 226.461 1.0866 176.58C2.63599 128.121 28.8682 85.3049 63.1829 52.2723C96.1504 20.5367 138.353 2.5126 183.369 1.10801Z"
                  stroke="#00AFEF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-dasharray="4 4"
                />
              </svg>
            </svg>
          </div>
        </div>

        <button className="next slider-btn" onClick={Next}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
          >
            <path
              d="M12.8099 24.2202L20.8704 16.1598L12.8099 8.09936"
              stroke="#3D3D3D"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
