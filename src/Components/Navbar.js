/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Home from "./Home";
import SocialIcons from "./SocialIcons";
// import "../Js/navbar";

// Globals
let navToggle, navBar;

/**
 * Navbar Component - Props are the following:
 * - items = these are an array of list items in navbar
 * - hrefs = these are an array of href links per list items
 * - itemFloat = List Items can float left or right
 * - brand = stores the brand image path, if no brand, IMPORTANT!!! --> brand needs = "none"
 * - brandFloat = brand logo can float either left or right.
 */

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
      isSelected: "home"
    };
  }
  toggleNav = () => {
    navBar = document.querySelector(".navbar-collapse");
    navBar.classList.toggle("navbar-show");
  };

  renderNavItems() {
    return this.props.items.map((item, i) => (
      <a
        key={i}
        href="#"
        onClick={() => {
          this.setState({ isSelected: this.props.menu[i] }, () => {
            console.log(this.state.isSelected);
          });
        }}
        className="nav-item"
        style={{ float: this.props.itemFloat }}
      >
        {item}
      </a>
    ));
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-brand">
            <h1 className="brand" style={{ float: this.props.brandFloat }}>
              B 2019
            </h1>
            <button
              id="toggle"
              className="toggle-btn"
              onClick={() => this.toggleNav()}
            >
              <i className="fas fa-bars" />
            </button>
            <div className="navbar-collapse">{this.renderNavItems()}</div>
          </nav>
        </header>
        <section className="about">
          <div className="col col-4 text-left">
            <p id="portfolio-para">Portfolio Website</p>
            <h1>Mathew Docker</h1>
            <div className="about-stroke" />
            <SocialIcons
              email={"mathew.docker@gmail.com"}
              instagram={"https://www.instagram.com/rainy_day_developer/"}
              twitter={"https://twitter.com/MathewDocker"}
              github={"https://github.com/matdocker"}
              cv={"../Images/cv.pdf"}
            />
          </div>
          <div className="col col-8">
            <Home menuSelected={this.state.isSelected} />
          </div>
        </section>
      </div>
    );
  }
}
export default Navbar;
