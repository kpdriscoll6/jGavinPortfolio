import React, { Component } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import parse from "html-react-parser";

import "./main.css";
import client from "../components/Client";
import Loader from "../images/loader.gif";

class Bio extends Component {
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
      <div className="container-fluid" id="bio">
        <div className="container text-center">
          <h1> BIO </h1>
          <hr />
          <p className="lead">
            {this.state.bioContent.length === 0 ? (
              <div className="align-center">
                <img src={Loader} alt="Loader" />
              </div>
            ) : (
              this.state.bioContent.fields.bioHeader
            )}
          </p>
          {this.state.bioContent.length === 0 ? (
            <div className="align-center">
              <img src={Loader} alt="Loader" />
            </div>
          ) : (
            parse(documentToHtmlString(this.state.bioContent.fields.bioText))
          )}
          <h1> RECENT NEWS: </h1>
          <hr />
          {this.state.bioContent.length === 0 ? (
            <div className="align-center">
              <img src={Loader} alt="Loader" />
            </div>
          ) : (
            parse(documentToHtmlString(this.state.bioContent.fields.newsText))
          )}
        </div>
      </div>
    );
  }
}

export default Bio;

//<p>{this.state.bioContent.fields.newsText}</p>
//console.log(this.state.bioContent.fields.newsText.body)
//{documentToHtmlString(this.state.bioContent.fields.newsText)}
//this.state.bioContent.fields.headshot.fields.file.url
