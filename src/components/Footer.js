import React, { Component } from "react";

class Footer extends Component {
    render() {
      return (
        <div id="footer">
        <footer className="site-footer">
          <div className="container mt-0">
            <div className="row">
              <div className="col-12 text-center">
                <a
                  className="btn btn-lg btn-social-icon btn-instagram"
                  href="https://www.instagram.com/johndgavin/"
                >
                  <i className="fa fa-instagram" />
                </a>{" "}
                <a
                  className="btn btn-lg btn-social-icon btn-facebook"
                  href="https://www.facebook.com/jgavin"
                >
                  <i className="fa fa-facebook" />
                </a>{" "}
                <a
                  className="btn btn-lg btn-social-icon btn-youtube"
                  href="https://www.youtube.com/channel/UCtskTX6Ch6sFnzJs-dWgoYQ?view_as=subscriber"
                >
                  <i className="fa fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </footer>
        </div>
      );
    }
  }
  
  export default Footer;