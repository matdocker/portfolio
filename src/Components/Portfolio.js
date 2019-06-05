/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Thumbnails from "./Thumbnails";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail: 1,
      total: 5
    };
  }
  next() {
    let val = this.state.thumbnail;
    if (this.state.thumbnail !== this.state.total) {
      this.setState({ thumbnail: ++val }, () =>
        console.log(this.state.thumbnail)
      );
    }
  }
  prev() {
    let val = this.state.thumbnail;
    if (this.state.thumbnail !== 1) {
      this.setState({ thumbnail: --val }, () =>
        console.log(this.state.thumbnail)
      );
    }
  }
  render() {
    return (
      <section id="portfolio" className="mb">
        <h1 className="red m-0">Portfolio</h1>
        <div className="flex">
          <button onClick={() => this.prev()} className="portfolio-btn">
            <i class="fas fa-chevron-left" />
          </button>
          <Thumbnails Thumbnail={this.state.thumbnail} />
          <button onClick={() => this.next()} className="portfolio-btn">
            <i class="fas fa-chevron-right" />
          </button>
        </div>
      </section>
    );
  }
}
export default About;
