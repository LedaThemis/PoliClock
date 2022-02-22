import React from "react";

import LOGO_IMAGE from "../images/mars.png";
const EARTH_TO_SOL = 0.97324429770083200222; // (24*3600) / (24*3600 + 39*60 + 35.244)

// "a Martian day — is 24 hours, 39 minutes and 35.244 seconds,[3] equivalent to 1.02749125 Earth days."
// https://en.wikipedia.org/wiki/Sol_(day_on_Mars)
function getMarsMills() {
  return new Date().getTime() * EARTH_TO_SOL;
}

class Navbar extends React.Component {
  render() {
    return (
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
    );
  }
}

class TimeInMars extends React.Component {
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
      <main role="main" className="content">
        <h1>TIME IN MARS:</h1>
        <p>{new Date(this.state.milliseconds).toLocaleString()}</p>
      </main>
    );
  }
}

class Body extends React.Component {
  render() {
    return (
      <div id="home" className="home-container container-template">
        <Navbar />
        <TimeInMars />
      </div>
    );
  }
}

export default Body;
