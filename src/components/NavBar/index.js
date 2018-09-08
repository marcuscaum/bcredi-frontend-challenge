import React from 'react';

import MainLogo from '../../assets/logo.svg';
import NavBar from './index.styled';

const NavBarComponent = () => (
  <NavBar>
    <img src={MainLogo} alt="" />
  </NavBar>
);

export default NavBarComponent;
