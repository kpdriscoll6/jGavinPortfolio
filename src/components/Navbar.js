import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../pages/main.css";
import {Link} from 'react-scroll' 
import {animateScroll as scroll} from 'react-scroll' 

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.listener = null;
    this.state = {
      status: "top"
    };
  }
  componentDidMount() {
    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.status !== "scroll") {
          this.setState({ status: "scroll" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }
  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }
  render() {
    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-dark p-0" id="navbar"
        style={{
          backgroundColor: this.state.status === "top" ? "transparent" : " rgba(0,0,0,0.9)",}}
        >
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
                  <Link className="nav-link" to="home" smooth={true} duration={1000}>
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
    );
  }
}


export default Navbar;
