import React from 'react';
import PropTypes from 'prop-types';

import { Section, Label } from './index.styled';

const FormField = ({ label, children }) => (
  <Section>
    <Label>{label}</Label>
    {children}
  </Section>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormField;
