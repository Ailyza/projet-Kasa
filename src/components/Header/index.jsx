import React from 'react';
import Logo from '../Logo';

import Navigation from '../Navigation';
import './Header.css';

const Header = () => {
  return (
    <div className="page-header">
      <div className="container">
        <div className="row">
          <div className="col">
            <Logo />
          </div>
          <div className="col">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;