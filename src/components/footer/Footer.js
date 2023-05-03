import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-section">
            <h3>City Shop</h3>
            <Link to="/about">About Us</Link>
            <Link to="https://www.facebook.com/">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="https://www.google.com/">
              <i className="fab fa-google"></i>
            </Link>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <p>Customer care Number</p>

            <p>+91-9038497002</p>
            <Link to="/email">Email Us</Link>
            <Link to="/refund-policy">Refund Policy</Link>
          </div>
          <div className="footer-section">
            <h4>Partnerships</h4>
            <Link to="/affiliate">Become an affiliate Partner</Link>
            <Link to="/check-order-status">Check order Status</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright ©2023. [] Limited</p>
        </div>
      </div>
    </footer>
  );
}
