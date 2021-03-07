import React, { Component } from "react";
import "./main.css";

import client from "../components/Client";
import Navbar from "../components/Navbar";
import Loader from "../images/loader.gif";

class Media extends Component {
  constructor() {
    super();
    this.state = {
      mediaContent: [],
      renderPost: false,
      post: {},
    };
  }
  componentDidMount() {
    client
      .getEntries({
        content_type: "mediaCarousel",
      })
      .then((entries) => {
        //console.log(entries)
        this.setState({ mediaContent: entries.items });
        //console.log(this.state.mediaContent)
      });
  }
  render() {
    return (
      <div className="container-fluid" id="media">
        <Navbar />
        <h1>Media</h1>
        <div className = "spacer"/>
        {/* carousel starts here */}
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          {/* refactor this as if then (media is array) can't find fields in array before choosing single object */}
          {this.state.mediaContent.length === 0 ? (
            <div className="align-center">
              <img src={Loader} alt="Loader" />
            </div>
          ) : (
          <div className="carousel-inner">
            {/* {this.state.mediaContent.map((image) => {
              return (
                <div className="carousel-item ">
                  <img
                    className="d-block w-100"
                    src={this.state.mediaContent.fields.mediaCarousel.fields.file.url}
                    alt="slide"
                  />
                </div>
              );
            })} */}
            <div className="carousel-item active">
              {console.log(this.state.mediaContent[0])}
              <img className="d-block w-100" src={this.state.mediaContent[0].fields.mediaCarousel} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={''} alt="Second slide" />
            </div>
          </div>)}
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* coursel ends here */}
      </div>
    );
  }
}

export default Media;
