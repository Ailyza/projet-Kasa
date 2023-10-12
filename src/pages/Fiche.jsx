import React,{useState} from 'react'
import Carrousel from '../components/Carrousel';
import { useParams } from 'react-router-dom';
import HostInfo from '../components/HostInfo';

import '../App.css';

import Information from '../components/Information';
import Collapse from '../components/Collapse';
import Error from './Error';
import Ratings from '../components/Ratings';
import Tags from '../components/Tags';
import Data from  '../assets/data/logement.json';


function Fiche (){

 //Récupère l'id de l'url grâce à useParams()
  let { id } = useParams();
  const logement = Data.find((logement) => logement.id === id)
if (!logement)  {
  return <Error/>
}

  //const location = useLocation();
  //const logement = location.state?.element;
  console.log(logement);

   return (
    <div>
      <Carrousel pictures={logement.pictures} />
    <div className='fiche-header'>
      <div className='infoHost'>
      <Information title={logement.title} location={logement.location} host={logement.host} /> 
      <Tags tags={logement.tags} />
      </div>
   
      <div className='fiche-tags-stars'>
        <HostInfo host={logement.host} />
        <Ratings rating={logement.rating} />
      </div>
     </div>  
      <div className='fiche-collapse'>
        <Collapse content={logement.description} title='Description'/>
        <Collapse content={logement.equipments} title='Equipements'/>
      </div>
    </div>
  );
};

export default Fiche;