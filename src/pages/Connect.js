//import React, { Component } from "react";
import "./main.css";
import React from "react";

export default function Connect() {
  return (
    <div className="container p-5" id="media">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Connect</h1>
          <hr />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-4">
            <div className="well well-sm">
              <form className="form-horizontal" action method="post">
                <fieldset>
                  {/* Name input*/}
                  <div className="form-group">
                    <label className="col-md-3 control-label" htmlFor="name">
                      Name
                    </label>
                    <div className="col-md-9">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  {/* Email input*/}
                  <div className="form-group">
                    <label className="col-md-3 control-label" htmlFor="email">
                      E-mail
                    </label>
                    <div className="col-md-9">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Your email"
                        className="form-control"
                      />
                    </div>
                  </div>
                  {/* Message body */}
                  <div className="form-group">
                    <label className="col-md-3 control-label" htmlFor="message">
                      Message
                    </label>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Please enter your message here..."
                        rows={5}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  {/* Form actions */}
                  <div className="form-group">
                    <div className="col-md-12 text-left">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
