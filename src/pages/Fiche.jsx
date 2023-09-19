import React from 'react'
import { useLocation } from 'react-router-dom';

const Fiche = () => {
  const location = useLocation();
  const logement = location.state?.element;
  console.log(logement)
   return (
    <div>

      <p>Fiche</p>
    </div>
  )
}

export default Fiche
