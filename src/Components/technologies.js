/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Technologies extends Component {
  render() {
    return (
      <section className="m-0">
        <h1 className="red m-0">Technology Stack</h1>
        <div className="flex text-left wrap">
          <div className="col-4">
            <p>
              <ul>
                <li>HTML5 & CSS3</li>2.5 Years
                <li>JavaScript > ES6</li>2 Years
                <li>Bootstrap</li>2 Years
                <li>Photoshop</li>6 Years
                <li>SASS</li>1 Year
              </ul>
            </p>
          </div>
          <div className="col-4">
            <p>
              <ul>
                <li>React-js</li>0.5 Years
                <li>Redux</li>0.5 Years
                <li>Node-js</li>0.5 Years
                <li>Balsamiqu Mockup</li>0.5 Years
                <li>Gulp Automation</li>0.5 Years
              </ul>
            </p>
          </div>
          <div className="col-4">
            <p>
              <ul>
                <li>Express.js</li>0.25 Years
                <li>Webpack</li>0.5 Years
                <li>Firebase</li>0.5 Years
                <li>Adobe XD</li>0.5 Years
                <li>PHP & MySql</li>0.5 Years
              </ul>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Technologies;
