import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
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
          <FaLinkedin />
        </div>
        <div className="col-10">
          <a
            className="text-muted"
            href="https://www.linkedin.com/in/karanmanral29/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            karanmanral29
          </a>
        </div>
      </div>
      <div
        className="row m-2"
        style={{ borderBottom: "2px solid black", padding: 0 }}
      >
        <div className="col-1">
          <FaGithub />
        </div>
        <div className="col-10">
          <a
            className="text-muted"
            href="https://github.com/karanmanral"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            KaranManral
          </a>
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
            href="mailto:karanmanral29@gmail.com"
            style={{ textDecoration: "none" }}
          >
            karanmanral29@gmail.com
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
    </div>
  );
}

export default Contact;
