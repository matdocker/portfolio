import React from "react";
import "./App.css";
import "./Style/style.css";
import Navbar from "./Components/Navbar";
import "./Style/fontawesome/fontawesome-free-5.8.2-web/js/all";

function App() {
  return (
    <div className="App">
      <Navbar
        id={"navbarOne"}
        items={["Contact", "My Portfolio", "Technologies", "About Me", "Home"]}
        menu={["contact", "portfolio", "technologies", "about", "home"]}
        itemFloat={"right"}
        brand={require("./Images/logo.png")}
        brandFloat={"left"}
      />
      <footer id="footer" className="text-center">
        <p>Designed using React-js by Mathew Docker</p>
      </footer>
    </div>
  );
}

export default App;
