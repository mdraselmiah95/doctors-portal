import React from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
      }}
      className="p-10"
    >
      <div className="footer">
        <div>
          <span className="footer-title">Services</span>
          <Link to="/home" className="link link-hover">
            Branding
          </Link>
          <Link to="/home" className="link link-hover">
            Design
          </Link>
          <Link to="/home" className="link link-hover">
            Marketing
          </Link>
          <Link to="/home" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/home" className="link link-hover">
            About us
          </Link>
          <Link to="/home" className="link link-hover">
            Contact
          </Link>
          <Link to="/home" className="link link-hover">
            Jobs
          </Link>
          <Link to="/home" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/home" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/home" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/home" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </div>
      <div className="my-10 text-center">
        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
