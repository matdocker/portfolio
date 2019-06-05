/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import cv from "../Images/cv.pdf";

class SocialIcons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <a href={this.props.linkdin} target="_blank">
          <i class="fab fa-linkedin icon" />
        </a>
        <a href={this.props.instagram} target="_blank">
          <i className="fab fa-instagram icon" />
        </a>
        <a href={this.props.twitter} target="_blank">
          <i className="fab fa-twitter icon" />
        </a>
        <a href={this.props.github} target="_blank">
          <i className="fab fa-github icon" />
        </a>
        <a href={cv} download>
          <i class="far fa-file-alt icon" />
        </a>
      </div>
    );
  }
}
export default SocialIcons;
