import React,{useState} from 'react'
import Carrousel from '../components/Carrousel';
import { useLocation } from 'react-router-dom';

import '../App.css';

import Information from '../components/Information';
import Collapse from '../components/Collapse';


function Fiche (){

  const location = useLocation();
  const logement = location.state?.element;

   return (
    <div>
      <Carrousel logement={logement}/>
      <Information logement={logement}/>
      <Collapse logement={logement}/>
    </div>
  )
}

export default Fiche;