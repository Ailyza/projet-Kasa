import React from 'react';
import './information.css';

const Information = ({ title, location, host }) => {
  return (
    <div className='information'>
        <h3 className='infoLocationTitle'>{title}</h3>
        <h6 className='infoLocationCity'>{location}</h6>
        <div className='host-wrapper'>
          <p className='host-name'>{host.name}</p>
          <img className='host-img' src={host.picture} alt='host picture' />
        </div>
    </div>
  )
}

export default Information;
