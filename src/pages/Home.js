import React, { Component } from "react";
import "./main.css";
import Navbar from '../components/Navbar' 
import Footer from '../components/Footer'
import Splash from './Splash'
import Bio from './Bio'
import Media from './Media'
import Thoughts from './Thoughts'
import Connect from './Connect'

class Home extends Component {
  render() {
    return (
      <div className="container-fluid" id="home" >
        <Navbar/>
        <Splash/>
        <Bio/>
        <Media/>
        <Thoughts/>
        <Connect/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
