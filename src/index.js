import React from 'react';
import ReactDOM from 'react-dom';

import SignUpPage from 'pages/SignUpPage';
import ThemeWrapper from 'utils/theme-wrapper';

import './index.css';

const App = () => (
  <ThemeWrapper>
    <SignUpPage />
  </ThemeWrapper>
);

ReactDOM.render(<App />, document.getElementById('root'));
