import React from "react";
import ReactDOM from "react-dom";

import "./styles/index.scss";

import LOGO_IMAGE from "./images/mars.png";

class Body extends React.Component {
  render() {
    return (
      <div id="home" className="home-container container-template">
        <nav className="navbar">
          <a href="#home">
            <img src={LOGO_IMAGE} className="logo"></img>
          </a>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#our-method">Our Method</a>
            </li>
            <li>
              <a href="#why-policlock">Why Policlock?</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>

        <div className="content">
          <h1>TIME IN MARS:</h1>
          <p>13/2/2011, 4:32:2PM</p>
        </div>
      </div>
    );
  }
}

class OurMethod extends React.Component {
  render() {
    return (
      <div id="our-method" className="info-card">
        <h3>Our Method</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}
class WhyPoliClock extends React.Component {
  render() {
    return (
      <div id="why-policlock" className="info-card">
        <h3>Why PoliClock?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}
class About extends React.Component {
  render() {
    return (
      <div id="about" className="info-card">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}
class Info extends React.Component {
  render() {
    return (
      <div className="info-container container-template">
        <OurMethod />
        <WhyPoliClock />
        <About />
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
      <div>
        <Body />
        <Info />
        <ToggleButton />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
