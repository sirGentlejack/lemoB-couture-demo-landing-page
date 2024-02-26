import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Successful() {
    const navigate = useNavigate();
  return (
    <div className="page success-container">
      <h1>
        Congratulations! Your <strong>Lemo B Couture</strong> Account is Ready
      </h1>
      <p>
        Welcome to the <strong>Lemo B Couture</strong> family! You've
        successfully created your account, and we're thrilled to have you on
        board. Get ready to experience a new era of personalized tailoring
        designed just for you.
      </p>
      <h3>What's Next?</h3>
      <ol>
        <li>
          <b>Explore Your Dashboard:</b> Navigate through your personalized
          dashboard to manage your profile, track orders, and discover exclusive
          recommendations based on your style.
        </li>
        <li>
          <b>Start Your Tailoring Journey:</b> Dive into our curated collections
          of premium fabrics and exquisite designs. Your account makes it easier
          than ever to customize and order your bespoke creations.
        </li>
        <li>
          <b>Stay in the Loop:</b> Be the first to know about our latest
          arrivals, special promotions, and members-only events. Check your
          inbox regularly for updates tailored to your preferences.
        </li>
        <li>
          <b>Measurements Made Simple:</b> Need to update or refine your
          measurements? Head to your profile to ensure a perfect fit with every
          order.
        </li>
      </ol>
      <h3>Our Commitment to You:</h3>
      <p>
        At <strong>Lemo B Couture</strong>, we're committed to providing a
        seamless and enjoyable tailoring experience. Your account is your
        gateway to exceptional craftsmanship and unparalleled style. Thank you
        for choosing us to be a part of your sartorial journey.
      </p>
      <button className="" onClick={() => navigate("/dashboard")}>Explore Your Dashboard</button>
      <p>
        If you have any questions or need assistance, our dedicated <Link to="/contact">support team </Link>
        is here to help. Enjoy the world of custom tailoring with
        <strong>Lemo B Couture</strong>.
      </p>
    </div>
  );
}
