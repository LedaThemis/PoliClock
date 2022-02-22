import React from "react";
import "../styles/footer.scss";

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

export default Footer;
