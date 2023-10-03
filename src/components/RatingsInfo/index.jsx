import React from 'react'
import Ratings from '../Ratings'
import Information from '../Information'
import './rating.css'
function ratingInfo() {
  return (
    <div className='ratingsInfo'>
      <Information title={logement.title} location={logement.location} host={logement.host} /> 
      <Ratings rating={logement.rating} />
    </div>
  )
}

export default ratingInfo
