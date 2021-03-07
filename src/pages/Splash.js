import React, { Component } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import parse from "html-react-parser";

import "./main.css";
import client from "../components/Client";
import Loader from "../images/loader.gif";

class Splash extends Component {
  constructor() {
    super();
    this.state = { bioContent: [] };
  }
  componentDidMount() {
    client
      .getEntries({
        content_type: "bio",
      })
      .then((entries) => {
        //console.log(entries)
        this.setState({ bioContent: entries.items[0] });
        //console.log(this.state.bioContent.fields.headshot.fields.file.url);
      });
  }
  render() {
    return (
        <div className="container-fluid" id="splash" >
            <div className="container text-center">
        {this.state.bioContent.length === 0 ? (
            <div className="align-center">
              <img src={Loader} alt="Loader" />
            </div>
          ) : (
            <img
              src={this.state.bioContent.fields.headshot.fields.file.url}
              className="img-fluid"
              alt="john"
              id="headshot"
            ></img>
          )}
        <h1> Drummer Percussionist Educator</h1>
        <div className="spacer"/>
        </div>
        </div>
    );
  }
}

export default Splash;