import React, { Component } from "react";
import "./main.css";
import Navbar from '../components/Navbar' 
import Footer from '../components/Footer'
import Bio from './Bio'

class Home extends Component {
  render() {
    return (
      <div className="container-fluid mb-0" id="home" >
        <Navbar/>
        <div className = "spacer"/>
        <h1> Drummer Percussionist        Educator</h1>
        <div className = "spacer"/>
        <Bio/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
