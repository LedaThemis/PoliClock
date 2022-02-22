import React from "react";
import ReactDOM from "react-dom";

import Body from "./components/Body.js";
import Info from "./components/Info.js";
import Footer from "./components/Footer.js";

import "./styles/index.scss";

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
