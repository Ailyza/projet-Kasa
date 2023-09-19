import React from 'react';
import './footer.css';
import logo_white from '../../assets/images/logo_white.png';



const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="footer_home">
        <img src={logo_white} alt="logo white" />
        <p className="footer_legend">© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
