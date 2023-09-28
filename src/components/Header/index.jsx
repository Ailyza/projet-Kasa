import React from 'react';
import Logo from '../Logo';

import Navigation from '../Navigation';
import './Header.css';

const Header = () => {
  return (
    <div className="header-wrapper">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;