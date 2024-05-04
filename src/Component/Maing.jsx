import React from "react";
import "../Assets/Css/maing.css";

const Maing = () => {
  return (
    <>
      <div className="teespace">
        <div className="space1">
          <img
            src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713913810/div.elementor-widget-container_2_l85npd.png"
            alt=""
          />
          <p>
            hellp@teespace.io
            <h3>+02 036 038 3996</h3>
            3665 Paseo Place, Suite 0960 <br />
            San Diego
          </p>
        </div>

        <div className="space2">
          <ol>
            <h3>Information</h3>
            <li>About us </li>
            <li>Our Blog </li>
            <li>Start a Return </li>
            <li>Contact Us </li>
            <li>Shipping FAQ</li>
          </ol>
        </div>
        <div className="space2">
          <ol>
            <h3>Services</h3>
            <li>Printing Services </li>
            <li>Digital Scanning </li>
            <li>Design Services </li>
            <li>Copying Services </li>
            <li>Print on Demand </li>
          </ol>
        </div>

        <div className="space2">
          <ol>
            <h3>Useful Links</h3>
            <li>My Account </li>
            <li>Print Provider </li>
            <li>Become a Partner </li>
            <li>Custom Product</li>
            <li>Make your own shirt </li>
          </ol>
        </div>

        <div className="space2">
          <ol>
            <h3>Newsletter</h3>
            <li>Subscribe to our newsletter </li>
            <li className="btn1">Your Email Address</li>
            <li className="btn2">Subscribe</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Maing;
