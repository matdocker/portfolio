/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import img1 from "../Images/cricketappeal.jpg";
import img from "../Images/ca-logo.png";

class Navbar extends Component {
  render() {
    return (
      <section className="header-img" style={{ background: `url(${img1})` }}>
        <span className="overlay">
          <img src={img} className="logo-img" />
        </span>
      </section>
    );
  }
}
export default Navbar;
