import React from 'react';
import { lifecycle } from 'recompose';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import resetToastStyles from './utils/reset-toast-styles';

const Toaster = props => (
  <ToastContainer
    className="toast-container"
    toastClassName="toast-container__toast"
    bodyClassName="toast-container__body"
    hideProgressBar
    {...props}
  />
);

export default lifecycle({
  componentWillMount() {
    resetToastStyles();
  },
})(Toaster);
