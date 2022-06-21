import React from "react";
//React has an internal mechanism for props validation called PropTypes.
import PropTypes from "prop-types";

function Header({ textColor = "green", text, bgColor = "gray" }) {
  return (
    <header>
      <div style={{ backgroundColor: bgColor }}>
        <h2>{text}</h2>
        <p style={{ color: textColor }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          at dolorum nihil praesentium modi dolor assumenda labore soluta fuga?
          Non commodi autem consectetur accusantium eaque totam corrupti
          laborum, ducimus earum.
        </p>
      </div>
    </header>
  );
}

// Header.defaultProps = {
//   textColor: "green",
//   bgColor: "gray",
// };

Header.propTypes = {
  bgColor: PropTypes.string.isRequired,
};
export default Header;
