import React from "react";
import "../../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-section">
            <h3>City Shop</h3>
            <a href="#">About Us</a>
            <a href="#">Mens Products</a>
            <a href="#">Womens Products</a>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <a href="#">Customer care Number</a>
            <p>+91-9038497002</p>
            <a href="#">Email Us</a>
            <a href="#">Refund Policy</a>
          </div>
          <div className="footer-section">
            <h4>Partnerships</h4>
            <a href="#">Become an affiliate Partner</a>
            <a href="#">Check order Status</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright ©2023. [] Limited</p>
        </div>
      </div>
    </footer>
  );
}
