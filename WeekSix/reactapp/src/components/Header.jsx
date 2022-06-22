import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

function Header({ textColor, text, bgColor }) {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  textColor: "green",
  bgColor: "gray",
};

Header.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
export default Header;
