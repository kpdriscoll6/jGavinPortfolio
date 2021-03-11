import React, { Component } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

import "./main.css";
import client from "../components/Client";

class Thoughts extends Component {
  constructor() {
    super();
    this.state = {
      thoughtsContent: [],
      renderPost: false,
      post: {},
    };
  }
  componentDidMount() {
    client
      .getEntries({
        content_type: "thoughts",
      })
      .then((entries) => {
        //console.log(entries)
        this.setState({ thoughtsContent: entries.items });
      });
  }
  render() {
    return (
      <div className="container-fluid" id="thoughts">
        <div className="container text-center">
          <h1> THOUGHTS </h1>
          <hr />
          <div className="container p-3">
            <div className="row">
              {this.state.thoughtsContent.map((post) => {
                //if there is an image return it if not reformat for no image
                if (Object.keys(post.fields).includes("postImage")) {
                  return (
                    <div className="col-md-6">
                      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                          <h3 className="mb-0">{post.fields.postTitle}</h3>
                          <div className="mb-1 text-muted">Nov 12</div>
                          {parse(documentToHtmlString(post.fields.postSummary))}
                          <Link
                            id="postlink"
                            to={`/Thoughts/${post.sys.id}`}
                            className="stretched-link"
                          >
                            Continue reading
                          </Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                          <svg
                            className="bd-placeholder-img"
                            width="200"
                            height="250"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                            role="img"
                            aria-label="Placeholder: Thumbnail"
                          >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c" />
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                              Thumbnail
                            </text>
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="col-md-6">
                      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                          <h3 className="mb-0">{post.fields.postTitle}</h3>
                          <div className="mb-1 text-muted">Nov 12</div>
                          <div className="d-flex justify-content-center">
                            {parse(
                              documentToHtmlString(post.fields.postSummary)
                            )}
                          </div>
                          <Link
                            id="postlink"
                            to={`/Thoughts/${post.sys.id}`}
                            className="stretched-link"
                          >
                            Continue reading
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Thoughts;
