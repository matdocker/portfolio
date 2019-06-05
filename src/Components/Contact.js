/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section>
        <h1 className="red">Contact Me</h1>
        <div className="contacts">
          <div className="flex-left">
            <h1 className="red">Name:</h1>
            <p>Mathew Docker</p>
          </div>
          <div className="flex-left">
            <h1 className="red">Mobile:</h1>
            <p>0431 554 900</p>
          </div>
          <div className="flex-left">
            <h1 className="red">Email:</h1>
            <a className="mailTo" href="mailto:mathew.docker@gmail.com">
              <p>mathew.docker@gmail.com</p>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
