import React from "react";
import "../styles/info.scss";

class OurMethod extends React.Component {
  render() {
    return (
      <div id="our-method" className="info-card">
        <h2>Our Method</h2>
        <p>
          We calculate the date and time in Mars by calculating the time since
          UNIX epoch in milliseconds, and converting that to Mars time. <br />
          This isn't the conventional way to get date on Mars, but it allows you
          to see the date on Mars in earth terms. <br />
          Here's an{" "}
          <a
            href="https://www.giss.nasa.gov/tools/mars24/help/algorithm.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            article by NASA
          </a>{" "}
          with a more conventional/practical approach.
        </p>
      </div>
    );
  }
}
class WhyPoliClock extends React.Component {
  render() {
    return (
      <div id="why-policlock" className="info-card">
        <h2>Why PoliClock?</h2>
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
        <h2>About</h2>
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
      <section
        role="doc-abstract"
        className="container-template info-container"
      >
        <OurMethod />
        <WhyPoliClock />
        <About />
      </section>
    );
  }
}

export default Info;
