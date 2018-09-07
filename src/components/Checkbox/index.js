import React from "react";
import PropTypes from "prop-types";

import Checkbox from "./index.styled";

const CheckBoxComponent = ({ label, ...props }) => (
  <Checkbox>
    <input type="checkbox" {...props} />
    <span>{label}</span>
  </Checkbox>
);

CheckBoxComponent.propTypes = {
  label: PropTypes.string.isRequired
};

export default CheckBoxComponent;
