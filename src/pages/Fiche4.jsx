import React,{useState} from 'react'
import Carrousel from '../components/Carrousel';
import { useLocation } from 'react-router-dom';
import angle_up from '../assets/images/angle-up-solid.png';
import '../App.css';

const Fiche = () => {
  const location = useLocation();
  const logement = location.state?.element;
  console.log(logement) 
 

  const [dropdownOpen, setDropdownOpen] = useState(false);

  /*UseState = créer la variable et la fonction 
  dropdownOpen= variable
  setDropdownOpen = fonction => change la valeur de la variable

  *** Mettre toujours la valeur à l'intérieur d'une fonction***/


  const changerDropDownOpen= () => { 
    setDropdownOpen(!dropdownOpen);
  
  };

console.log(dropdownOpen)

   return (
    <div>
      <Carrousel element={logement}/>
  <button onClick={changerDropDownOpen}>Déscription<img className={`arrow-up ${dropdownOpen && 'active'}`} src={angle_up} alt="flèche description" /></button>
   {dropdownOpen && (
        <p>voici mon paragraphe.</p>
      )} 
    </div>
  )
}

export default Fiche