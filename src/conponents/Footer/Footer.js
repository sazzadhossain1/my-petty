import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-parent-div">
      <div className="footer-grid-div container mx-auto">
        <div className="single-footer-div">
          <h2 className="footer-heading">About Us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
            vero ducimus laudantium voluptates pariatur distinctio nobis
            eligendi eaque corporis minima, cumque ea laboriosam accusamus
            officiis alias omnis quidem commodi sequi.
          </p>
          <div className="social-media-parent-div">
            <div className="social-media-btn">
              <Link to={"https://www.facebook.com/"} target="_blank">
                F
              </Link>
            </div>

            <div className="social-media-btn">
              <Link
                className="social-media-btn"
                to={"https://www.facebook.com/"}
                target="_blank"
              >
                T
              </Link>
            </div>

            <div className="social-media-btn">
              <Link
                className="social-media-btn"
                to={"https://www.facebook.com/"}
                target="_blank"
              >
                I
              </Link>
            </div>

            <div className="social-media-btn">
              <Link
                className="social-media-btn"
                to={"https://www.facebook.com/"}
                target="_blank"
              >
                IN
              </Link>
            </div>
          </div>
        </div>
        <div className="single-footer-div">
          <h2 className="footer-heading">Explore</h2>
          <ul>
            <Link>
              <li>About Us</li>
            </Link>
            <Link>
              <li>Service</li>
            </Link>
            <Link>
              <li>Testimonial</li>
            </Link>
            <Link>
              <li>Expert Team</li>
            </Link>
            <Link>
              <li>Posts</li>
            </Link>
          </ul>
        </div>
        <div className="single-footer-div">
          <h2 className="footer-heading">Support</h2>
          <ul>
            <Link>
              <li>Pet Shower</li>
            </Link>
            <Link>
              <li>Health Checkup</li>
            </Link>
            <Link>
              <li>Pet Grooming</li>
            </Link>
            <Link>
              <li>Spa and Grooming</li>
            </Link>
            <Link>
              <li>Brush & Blow Dry</li>
            </Link>
          </ul>
        </div>
        <div className="single-footer-div">
          <h2 className="footer-heading">Subscribe</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            officiis?
          </p>
          <input type="email" placeholder="E-mail Address" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
