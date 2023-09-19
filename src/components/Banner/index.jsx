import React from 'react';
import './banner.css';
import banner_accueil from '../../assets/images/banner_acceuil.png';
const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
           <p>Chez vous, partout et ailleurs</p>
          </div>
          <img className="bg-img" src={banner_accueil} alt="banner"/>
        </div>
  );
};

export default Banner;
