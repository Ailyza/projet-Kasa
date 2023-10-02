import React,{useState} from 'react'
import Carrousel from '../components/Carrousel';
import { useLocation } from 'react-router-dom';

import '../App.css';

import Information from '../components/Information';
import Collapse from '../components/Collapse';
import Error from './Error';
import Ratings from '../components/Ratings';
import Tags from '../components/Tags';

function Fiche (){

  const location = useLocation();
  const logement = location.state?.element;
  console.log(logement);

   return (
    <div>
      <Carrousel pictures={logement.pictures} />
      <Information title={logement.title} location={logement.location} host={logement.host} />
      <div className='fiche-tags-stars'>
        <Tags tags={logement.tags} />
        <Ratings rating={logement.rating} />
      </div>
      <div className='fiche-collapse'>
        <Collapse content={logement.description} title='Description'/>
        <Collapse content={logement.equipments} title='Equipements'/>
      </div>
    </div>
  )
}

export default Fiche;