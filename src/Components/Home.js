/* eslint-disable no-useless-constructor */
/* eslint-disable react/require-render-return */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Technologies from "./technologies";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "home"
    };
  }

  render() {
    if (this.props.menuSelected === "home") {
      return (
        <div className="text-left">
          <h1>
            Welcome! <span className="white BladeRunner">B</span>
            <span className="white BladeRunner">B</span>
            <span className="white BladeRunner">B</span>
          </h1>
          <p>
            <span className="red">Web Developers -</span> are bioengineered
            humans. Designed by Tyrell Corporation for use off-world. Their
            enhanced coding abilities made them ideal slave labor. After a
            series of violent rebellions, their manufacture became prohibited
            and Tyrell corp went bankrupt. The collapse of ecosystems in the
            early 2000's led to the rise of industrialist Niander Wallace, whose
            mastery of synthetic farming averted famine. Wallace acquired the
            remains of Tyrell corp and created a new line of Web Developers who
            obey. Many older model Web Developers — Nexus 8's with open-ended
            lifespans — survived. They are hunted down and 'retired'. Those that
            replace them go by the name...
          </p>
          <h1 className="red">Mathew Docker</h1>
        </div>
      );
    } else if (this.props.menuSelected === "about") {
      return <About />;
    } else if (this.props.menuSelected === "technologies") {
      return <Technologies />;
    } else if (this.props.menuSelected === "portfolio") {
      return <Portfolio />;
    } else if (this.props.menuSelected === "contact") {
      return <Contact />;
    }
  }
}
export default Home;
