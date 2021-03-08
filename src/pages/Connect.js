//import React, { Component } from "react";
import "./main.css";
import React from 'react';

export default function Connect() {
  return (
  <div className="container-fluid" id="media">
  <div className="container">
  <div className="row">
    <div className="col-12 text-center">
      <h1>Connect</h1>
    </div>
  </div>
  <form name="contact" method="POST" data-netlify="true">
    <p>
      <label>First Name: <input type="text" name="name" /></label>   
    </p>
    <p>
      <label>Last Name: <input type="text" name="name" /></label>   
    </p>
    <p>
      <label>Email: <input type="email" name="email" /></label>
    </p>
    <p>
      <label>Message: <textarea name="message"></textarea></label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
  </div>
  </div>
  );
}
