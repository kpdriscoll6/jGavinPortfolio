//import React, { Component } from "react";
import "./main.css";
import React from 'react';

export default function Connect() {
  return (
  <div className="container-fluid p-5" id="media">
  <div className="container">
  <div className="row">
    <div className="col-12 text-center">
      <h1>Connect</h1>
    </div>
  </div>
  <form name="contact" method="POST" action="/contact" data-netlify="true">
    <div className="row">
      <div className="col">
      <p>
        <label>First Name: <input type="text" name="firstName" placeholder="First Name"/></label>   
      </p>
      </div>
      <div className="col">
      <p>
        <label>Last Name: <input type="text" name="lastName" placeholder="Last Name"/></label>   
      </p>
      </div>
    </div>
    <div className="row">
    <p>
      <label>Email: <input type="email" name="email" placeholder="Email"/></label>
    </p>
    </div>
    <div className="row">
    <p>
      <label>Message: <textarea name="message" placeholder="Message"></textarea></label>
    </p>
    </div>
    <div className="row">
      <div className="col-12 text-center">
      <button type="submit" className="btn btn-secondary">Send</button>
    </div>
    </div>
    
  </form>
  </div>
  </div>
  );
}
