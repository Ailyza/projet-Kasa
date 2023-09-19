import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav ms-auto">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? 'nav-item active' : 'nav-item')}
          >
            <li className="nav-item">Accueil</li>
          </NavLink>
          <NavLink
            to="/About"
            className={(nav) => (nav.isActive ? 'nav-item active' : 'nav-item')}
          >
            <li className="nav-item">A propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;