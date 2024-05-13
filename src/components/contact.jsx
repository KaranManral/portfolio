import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

function Contact() {
  return (
    <div className="row" id="contact">
      <div className="row my-2">
        <div className="col" id="contactHead">
          CONTACT
        </div>
      </div>
      <div
        className="row m-2"
        style={{ borderBottom: "2px solid black", padding: 0 }}
      >
        <div className="col-1">
          <FaEnvelope />
        </div>
        <div className="col-10">
          <a
            className="text-muted"
            href="mailto:karanmnaral2000@gmail.com"
            style={{ textDecoration: "none" }}
          >
            karanmnaral2000@gmail.com
          </a>
        </div>
      </div>
      <div
        className="row m-2"
        style={{ borderBottom: "2px solid black", padding: 0 }}
      >
        <div className="col-1">
          <FaGlobe />
        </div>
        <div className="col-10">
          <a
            className="text-muted"
            href="https://trywebsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Try Web Soft
          </a>
        </div>
      </div>
      <div
        className="row m-2"
        style={{ borderBottom: "2px solid black", padding: 0 }}
      >
        <div className="col-1">
          <FaLinkedin />
        </div>
        <div className="col-10">
          <a
            className="text-muted"
            href="https://www.linkedin.com/in/karan-manral-36a5b9239/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Linkedin Karan Manral
          </a>
        </div>
      </div>
      <div
        className="row m-2"
        style={{ borderBottom: "2px solid black", padding: 0 }}
      >
        <div className="col-1">
          <FaTwitterSquare />
        </div>
        <div className="col-10">
          <a
            className="text-muted"
            href="https://twitter.com/KaranManral29"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Twitter Karan Manral
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
