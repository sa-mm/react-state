import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { handler, text } = props;
  return <button onClick={handler}>{text}</button>;
};

Button.propTypes = {
  handler: PropTypes.func
};

export default Button;
