import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import LOGO_IMAGE from "./images/mars.png";

class Body extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="navbar">
          <img src={LOGO_IMAGE} className="logo"></img>
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
        </div>

        <div class="content">
          <h1>TIME IN MARS:</h1>
          <p>13/2/2011, 4:32:2PM</p>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Body />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
