import React from 'react'
import Lemob from '../images/Lemob.png'

export default function Hero(){
    return(
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
          <a href="#">Order now</a>
          <a href="#">Our prices</a>
        </div>
      </div>

      <div class="home-sci">
        <a href="#"><i class="bx bxl-facebook"></i></a>
        <a href="#"><i class="bx bxl-twitter"></i></a>
        <a href="#"><i class="bx bxl-linkedin"></i></a>
      </div>
      <span class="home-imghover">
        <img
          src={Lemob}
          alt="lemob logo"
          width="450vw"
        />
      </span>
    </section>
    )
}