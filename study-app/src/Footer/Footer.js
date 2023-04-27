import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer
      className="bg-light text-center text-white"
      style={{ position: "relative", bottom: "0" }}
    >
      <div className="container p-4 pb-0">
        <section
          className="mb-4 d-flex justify-content-center align-items-center"
          style={{ marginTop: "15px" }}
        >
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3B5998", padding: "5px" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55ACEE", padding: "5px" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#DD4B39", padding: "5px" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faGoogle} size="2x" />
          </a>
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#AC2BAC", padding: "5px" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082CA", padding: "5px" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#333333", padding: "5px" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: "#9686AC" }}>
        Crunch your code, not your time! &copy; 2023
      </div>
    </footer>
  );
};
export default Footer;
