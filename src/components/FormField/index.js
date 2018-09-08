import React from 'react';
import PropTypes from 'prop-types';

import { FormField, Label } from './index.styled';

const FormFieldComponent = ({ label, error, children }) => (
  <FormField error={error}>
    {label && <Label>{label}</Label>}
    {children}
    {error && <span>{error}</span>}
  </FormField>
);

FormFieldComponent.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FormFieldComponent.defaultProps = {
  error: null,
  label: null,
};

export default FormFieldComponent;
