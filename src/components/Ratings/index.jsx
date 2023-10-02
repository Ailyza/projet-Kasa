import React from 'react';
import {BsStarFill} from 'react-icons/bs'
import './ratings.css';

const RatingStars = ({ rating }) => {
  const maxStars = 5; 
  const stars = [];
  
  for (let i=1 ;i <= maxStars; i++){
    // i : élément du tableau
    if(i <= rating){
      stars.push(<BsStarFill className='star'/>)
    } else{
     stars.push(<BsStarFill className='star-gris'/>)   
    }
  }
  

  return (
    <div className="rating-stars">
      {stars.map((star, index) => (
    <span key={index}>{star}</span>
  ))}
    </div>
  );
};

export default RatingStars;

 