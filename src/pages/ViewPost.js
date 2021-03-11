import React, { Component } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import parse from "html-react-parser";
import { NavLink } from "react-router-dom";

import "./main.css";
import Footer from "../components/Footer";
import client from "../components/Client";

class ViewPost extends Component {
  constructor() {
    super();
    this.state = {
      thoughtsContent: [],
      renderPost: false,
      post: {},
    };
  }
  componentDidMount() {
    const { postId } = this.props.match.params;
    client.getEntry(postId).then((item) => {
      //console.log(item)
      this.setState({
        post: item,
      });
    });
  }
  render() {
    return (
      <div className="container-fluid" id="thoughts">
        <div className="container text-center p-5" id="blogPost">
          <div className="row">
            <div className="col-2  text-center">
              <NavLink className="nav-link" to="/">
                <h2>
                  <i className="fa fa-home"></i>
                </h2>
              </NavLink>
            </div>

            <div className="col-8  text-center">
              <h1> THOUGHTS </h1>
            </div>
            <div className="col-2 "></div>
          </div>
          <hr />
          {Object.keys(this.state.post).length === 0 ? (
            <div />
          ) : (
            <React.Fragment>
              <h1>{this.state.post.fields.postTitle}</h1>
              {Object.keys(this.state.post.fields).includes("postImage") ? (
                <img
                  src={this.state.post.fields.postImage.fields.file.url}
                  className="img-fluid"
                  alt="post"
                  id="postImage"
                ></img>
              ) : (
                <div />
              )}
              <div className="container p-3">
                <p>
                  {parse(documentToHtmlString(this.state.post.fields.postText))}
                </p>
              </div>
            </React.Fragment>
          )}
          <NavLink className="nav-link" to="/">
            <div className="row">
              <div className="col-5 "></div>
              <div className="col-1 text-right">
                <h5>
                  <i className="fa fa-long-arrow-alt-left"></i>
                </h5>
              </div>
              <div className="col-1 text-left">
                <h5> BACK </h5>
              </div>
              <div className="col-5"></div>
            </div>
          </NavLink>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ViewPost;
