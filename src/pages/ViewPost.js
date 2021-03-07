import React, { Component } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

import "./main.css";
import Navbar from "../components/Navbar";
import client from "../components/Client";
import Loader from "../images/loader.gif";

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
        <Navbar />
        <div className="container text-center">
          <h1> THOUGHTS </h1>
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
              <p>
                {parse(documentToHtmlString(this.state.post.fields.postText))}
              </p>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default ViewPost;