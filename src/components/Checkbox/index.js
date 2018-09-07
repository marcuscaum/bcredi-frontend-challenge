import React from 'react';
import PropTypes from 'prop-types';

import {
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
} from './index.styled';

const CheckBoxComponent = ({ label, name, fontSize, color, ...props }) => (
  <CheckboxContainer>
    <CheckboxInput id={`${name}-input-checkbox`} {...props} />
    <CheckboxLabel
      color={color}
      fontSize={fontSize}
      htmlFor={`${name}-input-checkbox`}
    >
      {label}
    </CheckboxLabel>
  </CheckboxContainer>
);

CheckBoxComponent.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  name: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CheckBoxComponent;
