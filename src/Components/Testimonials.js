import React from "react";


export default function Testimonials({ item }) {
  return (
    <>
      <div className="testimonials-box">
        <div>
          <img
            src={require(`../images/${item.image}`)}
            alt="Testimonials"
            className="testimonials-img"
          />
          <h3 className="testimonials-name">{item.name}</h3>

          <p className="testimonial-title"> {item.title}</p>
        </div>
        <p className="testimonial-quote">{item.quote}</p>
      </div>
    </>
  );
}
