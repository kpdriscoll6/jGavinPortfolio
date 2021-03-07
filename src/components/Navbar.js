import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../pages/main.css";
import {Link} from 'react-scroll' 

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand pl-5" id="logo" to="/">
              John Gavin
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse pr-5" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    <i className="fa fa-home"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="bio" smooth={true} duration={1000}>
                    BIO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="media" smooth={true} duration={1000}>
                    MEDIA
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="thoughts" smooth={true} duration={1000}>
                    THOUGHTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="connect" smooth={true} duration={1000}>
                    CONNECT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
