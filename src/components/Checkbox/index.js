import React from 'react';
import PropTypes from 'prop-types';

import {
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
} from './index.styled';

const CheckBoxComponent = ({ label, name, fontSize, fontColor, ...props }) => (
  <CheckboxContainer>
    <CheckboxInput name={name} id={`${name}-input-checkbox`} {...props} />
    <CheckboxLabel
      fontColor={fontColor}
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
  fontColor: PropTypes.string,
  fontSize: PropTypes.string,
};

CheckBoxComponent.defaultProps = {
  fontSize: '12px',
  fontColor: '#cccccc',
};

export default CheckBoxComponent;
