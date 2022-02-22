import React from "react";
import ReactDOM from "react-dom";

import Info from "./components/Info.js";

import "./styles/index.scss";

import LOGO_IMAGE from "./images/mars.png";
const EARTH_TO_SOL = 0.97324429770083200222; // (24*3600) / (24*3600 + 39*60 + 35.244)

// "a Martian day — is 24 hours, 39 minutes and 35.244 seconds,[3] equivalent to 1.02749125 Earth days."
// https://en.wikipedia.org/wiki/Sol_(day_on_Mars)
function getMarsMills() {
  return new Date().getTime() * EARTH_TO_SOL;
}

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = { milliseconds: getMarsMills() };
  }
  tick() {
    this.setState({
      milliseconds: getMarsMills(),
    });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div id="home" className="home-container container-template">
        <nav role="navigation" className="navbar">
          <a href="#home">
            <img
              src={LOGO_IMAGE}
              alt="policlock logo, mars with stars around it"
              className="logo"
            ></img>
            <h1>PoliClock</h1>
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

        <main role="main" className="content">
          <h1>TIME IN MARS:</h1>
          <p>{new Date(this.state.milliseconds).toLocaleString()}</p>
        </main>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        &copy; {new Date().getFullYear()},{" "}
        <a
          href="https://github.com/hypnotizedleda"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leda
        </a>
        <br />
        <p id="attribution-text">
          Attribution: Mars icon was created by{" "}
          <a
            href="https://www.flaticon.com/free-icons/mars"
            title="mars icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik - Flaticon
          </a>
        </p>
      </footer>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Body />
        <Info />
        <Footer />
      </div>
    );
  }
}

if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App />, document.getElementById("root"));
