/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class ThumbNails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.Thumbnail === 1) {
      return (
        <section>
          <h2 className="red">react+redux Web App</h2>
          <img
            src={require("../Images/customwear.PNG")}
            className="thumbnail"
          />

          <p>Customwear Clothing Designer</p>
          <p>
            I developed this webapp for a client using React with Redux. Node-js
            and Express on the backend and Firebase hosting and Firebase
            functions to host the front and back ends respectively.
          </p>
          <a
            href="https://customwear.ozappeal.com.au/"
            className="invest-btn"
            target="_blank"
          >
            Investigate
          </a>
          <a
            href="https://github.com/matdocker/CustomKit"
            className="invest-btn"
            target="_blank"
          >
            Repo
          </a>
        </section>
      );
    } else if (this.props.Thumbnail === 2) {
      return (
        <section>
          <h2 className="red">react Website</h2>
          <img src={require("../Images/portfolio.PNG")} className="thumbnail" />

          <p>My Portfolio Website</p>
          <p>
            This is my portfolio website. It has been developed using React-js
            and Node-js. Leveraging Reacts states, props and components as well
            as various other javascript libraries through Node-js Package
            Manager. My portfolio website's theme has been influenced by one of
            my favorite movies Blade Runner.
          </p>
          <a
            href="https://mathewdocker.com.au/"
            className="invest-btn"
            target="_blank"
          >
            Investigate
          </a>
          <a
            href="https://mathewdocker.com.au/"
            className="invest-btn"
            target="_blank"
          >
            Repo
          </a>
        </section>
      );
    } else if (this.props.Thumbnail === 3) {
      return (
        <section>
          {" "}
          <h2 className="red">Vanilla JavaScript game (pre ES6)</h2>
          <img
            src={require("../Images/colourgame.png")}
            className="thumbnail"
          />
          <p>Colour Game</p>
          <p>
            After searching the internet for small JavaScript projects I could
            complete to improve my coding skills. I found a simple game called
            the colour game. The objective is to match the correct colour tile
            with the rgb colour data that is displayed at the top of the screen.
            When you match the correct colour, you win!
          </p>
          <a
            href="https://mathewdocker.com.au/colourgame.html"
            className="invest-btn"
            target="_blank"
          >
            Investigate
          </a>
          <a
            href="https://github.com/matdocker/Colour-Game"
            className="invest-btn"
            target="_blank"
          >
            Repo
          </a>
        </section>
      );
    } else if (this.props.Thumbnail === 4) {
      return (
        <section>
          <h2 className="red">Unity 3d Mobile Game</h2>
          <img
            src={require("../Images/coinpusher.png")}
            className="thumbnail"
          />
          <p>Coin Pusher: Game of Thorwns</p>
          <p>
            This game was developed using Unity 3D Game Engine using C#. I used
            a coin pusher app template as the base for my game. I improved the
            game by adding an in game mini game where the user has to throw a
            ball (hence the name Game of Throwns) into a barrel to win various
            prizes.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.rainy_day.gameofthrowns&hl=en_AU"
            className="invest-btn"
            target="_blank"
          >
            Investigate
          </a>
          <a
            href="https://github.com/matdocker/game_of_throwns_unity_app"
            className="invest-btn"
            target="_blank"
          >
            Repo
          </a>
        </section>
      );
    } else if (this.props.Thumbnail === 5) {
      return (
        <section>
          <h2 className="red">Android Studio App</h2>
          <img src={require("../Images/scaffmate.png")} className="thumbnail" />

          <p>ScaffMate. A Scaffolding Reference App</p>
          <p>
            ScaffMate Android App has been developed using Android Studio (Java). ScaffMate is a scaffold reference 
            app containing the rules and regulations of scaffolding. The purpose of this app was to learn 
            the development process from Idea to an app in the app store.
          </p>
          <a
            href="https://mathewdocker.com.au/colourgame.html"
            className="invest-btn"
            target="_blank"
          >
            Currently Unavailible
          </a>
          <a
            href="https://github.com/matdocker/scaffmate_android_app"
            className="invest-btn"
            target="_blank"
          >
            Repo
          </a>
        </section>
      );
    }
  }
}
export default ThumbNails;
