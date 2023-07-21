import React from "react";

function Header() {
  function goToModule(event, moduleID) {
    event.preventDefault();
    document.getElementById(moduleID).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
  return (
    <nav className="navbar navbar-expand-lg" id="navbarTop">
      <button
        className="navbar-toggler m-2 bg-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        style={{ justifyContent: "end" }}
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item mx-3">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item mx-3">
            <a
              className="nav-link"
              href="#!"
              onClick={(e) => {
                goToModule(e, "about");
              }}
            >
              About
            </a>
          </li>
          <li className="nav-item mx-3">
            <a
              className="nav-link"
              href="#!"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, document.body.scrollHeight);
              }}
            >
              Education
            </a>
          </li>
          <li className="nav-item mx-3">
            <a
              className="nav-link"
              href="#!"
              onClick={(e) => {
                goToModule(e, "experience");
              }}
            >
              Experience
            </a>
          </li>
          <li className="nav-item mx-3">
            <a
              className="nav-link"
              href="#!"
              onClick={(e) => {
                goToModule(e, "skills");
              }}
            >
              Skills
            </a>
          </li>
          <li className="nav-item mx-3">
            <a
              className="nav-link"
              href="#!"
              onClick={(e) => {
                goToModule(e, "projects");
              }}
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
