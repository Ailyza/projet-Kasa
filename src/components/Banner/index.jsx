import React from 'react';
import './banner.css';

const Banner = ({ url, displayText }) => {
  return (
      <div className="banner">
           <img className='banner-img' src={url} alt='image banner' />
           {displayText && <p>Chez vous, partout et ailleurs</p>}
      </div>
  );
};

export default Banner;
