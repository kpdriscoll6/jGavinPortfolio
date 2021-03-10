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
      console.log(Object.keys(this.state.post.fields));
    });
  }
  render() {
    return (
      <div className="container-fluid" id="thoughts">
        <div className="container border text-center p-5" id="blogPost">
          <div className="row">
            <NavLink className="nav-link" to="/">
              <h2>
                <i className="fa fa-home"></i>
              </h2>
            </NavLink>
            <h1> THOUGHTS </h1>
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
                  alt="post image"
                  id="postImage"
                ></img>
              ) : (
                <div />
              )}
              <div className="container border">
                <p>
                  {parse(documentToHtmlString(this.state.post.fields.postText))}
                </p>
              </div>
            </React.Fragment>
          )}
          <NavLink className="nav-link" to="/">
            <div className="row">
              <h5>
                <i className="fa fa-long-arrow-alt-left"></i>
              </h5>
              <h5> BACK </h5>
            </div>
          </NavLink>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ViewPost;
