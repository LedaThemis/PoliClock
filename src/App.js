import React from "react";

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

export default App;
