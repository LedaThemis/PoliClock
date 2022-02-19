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
          We calculate the date and time in Mars by calculating the time since
          UNIX epoch in milliseconds, and converting that to Mars time This
          isn't the conventional way to get date on Mars, but it allows you to
          see the date on Mars in earth terms.
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
          Well, the secret formula to a good name is greek! (yes, that's true)
          and with that, you take Mars (God of War) in greek which is "Polemos"
          Adding to that "Clock", and you get PoleClock. Now, The problem with
          PoleClock is the pronounciation, so we changed that to PoliClock 🎉
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
          This Project was inspired by a need to congratulate people in their
          birthdays late and not get scolded, and that's possible by telling
          them that it was in "Mars Time"
        </p>
      </div>
    );
  }
}
class Info extends React.Component {
  render() {
    return (
      <div className="container-template info-container">
        <OurMethod />
        <WhyPoliClock />
        <About />
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        &copy; {new Date().getFullYear()},{" "}
        <a
          href="https://github.com/hypnotizedleda"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leda
        </a>
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
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
