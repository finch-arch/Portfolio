import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-5-strong "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div className="navbar-brand" >
            Vishal
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#skill">
                  Skills
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#project">
                  Projects
                </a>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#contacts">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
