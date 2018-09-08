import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './theme';

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

ThemeWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeWrapper;
