import React from 'react';
import PropTypes from 'prop-types';

import { FormField, Label } from './index.styled';

const FormFieldComponent = ({ label, error, children }) => (
  <FormField error={error}>
    <Label>{label}</Label>
    {children}
    {error && <span>{error}</span>}
  </FormField>
);

FormFieldComponent.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormFieldComponent;
