import React from "react";
import PropTypes from "prop-types";

import Button from "./index.styled";

const ButtonComponent = ({ type, icon, children, ...props }) => (
  <Button type={type} {...props}>
    <span>{icon && icon}</span>
    {children}
  </Button>
);

ButtonComponent.propTypes = {
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

ButtonComponent.defaultProps = {
  icon: null,
};

export default ButtonComponent;
