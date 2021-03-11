import React, { Component } from "react";
import "./main.css";

import client from "../components/Client";
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
        //console.log("trying to load images");
        //console.log(typeof this.state.mediaContent);
      });
  }

  render() {
    return (
      <div className="container-fluid" id="media">
        <div className="container text-center">
          <h1>Media</h1>
          <div className="spacer" />
          {/* carousel starts here */}
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            {this.state.mediaContent.length === 0 ? (
              <div className="align-center">
                <img src={Loader} alt="Loader" />
              </div>
            ) : (
              <div className="carousel-inner">
                {/*pulls the first image then slice the array then map*/}
                <div
                  className="carousel-item active"
                  key={this.state.mediaContent[0].fields.carouselImage.fields.title}
                >
                  <img
                    className="d-block w-100"
                    //src={this.state.mediaContent.fields.mediaCarousel.fields.file.url}
                    //"//images.ctfassets.net/57xmhcfzpz7y/2zaleqTtwGjHNer0uKrFIR/65587c09aad8ccfbd419d8f7121cb521/carousel3.jpg"
                    src={
                      this.state.mediaContent[0].fields.carouselImage.fields
                        .file.url
                    }
                    alt="first slide"
                  />
                </div>
                {this.state.mediaContent.slice(1).map((media) => {
                  console.log(media.fields.carouselImage.fields);
                  return (
                    <div
                      className="carousel-item"
                      key={media.fields.carouselImage.fields.title}
                    >
                      <img
                        className="d-block w-100"
                        src={media.fields.carouselImage.fields.file.url}
                        alt="slide"
                      />
                    </div>
                  );
                })}
              </div>
            )}
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
          {/* carousel ends here */}
        </div>
      </div>
    );
  }
}

export default Media;
