import React, { Component } from "react";
import "./main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Splash from "./Splash";
import Bio from "./Bio";
import Media from "./Media";
import Thoughts from "./Thoughts";
import Connect from "./Connect";
import { Element } from "react-scroll";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid" id="home">
        <Navbar />
        <Element name="splash">
          <Splash />
        </Element>
        <Element name="bio">
          <Bio />
        </Element>
        <Element name="media">
          <Media />
        </Element>
        <Element name="thoughts">
          <Thoughts />
        </Element>
        <Element name="connect">
          <Connect />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default Home;
