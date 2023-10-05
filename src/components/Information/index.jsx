import React from 'react';
import './information.css';

const Information = ({ title, location, host }) => {
  return (
    <div className='information'>
        <h3 className='infoLocationTitle'>{title}</h3>
        <h6 className='infoLocationCity'>{location}</h6>
        
    </div>
  )
}

export default Information;
