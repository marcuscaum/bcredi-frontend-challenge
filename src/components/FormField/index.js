import React from "react";
import PropTypes from "prop-types";

import { FormField, Label } from "./index.styled";

const FormFieldComponent = ({ label, children }) => (
  <FormField>
    <Label>{label}</Label>
    {children}
  </FormField>
);

FormFieldComponent.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FormFieldComponent;
