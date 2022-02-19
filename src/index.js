import React from "react";
import ReactDOM from "react-dom";

import "./styles/index.scss";

import LOGO_IMAGE from "./images/mars.png";

class Body extends React.Component {
  render() {
    return (
      <div className="banner">
        <nav className="navbar">
          <a href="#">
            <img src={LOGO_IMAGE} className="logo"></img>
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Our Method</a>
            </li>
            <li>
              <a href="#">Why Policlock?</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>

        <div class="content">
          <h1>TIME IN MARS:</h1>
          <p>13/2/2011, 4:32:2PM</p>
        </div>
        <div id="our-method">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    );
  }
}

class ToggleButton extends React.Component {
  render() {
    return (
      <div id="toggleButton">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Body />
        <ToggleButton />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
