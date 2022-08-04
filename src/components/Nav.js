import React from "react";

const Nav = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">朱鴻埕</span>
        <span class="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={require("../photos/photo1.jpg")}
            alt=""
          />
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">
              About me
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">
              Exprience
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">
              Education
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">
              skills
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#certificate">
              Certifications
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
