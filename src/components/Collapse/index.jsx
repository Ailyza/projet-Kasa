import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';

import './collapse.css';
import { FaAngleDown } from 'react-icons/fa';


const Collapse = ({ content, title }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    /*UseState = créer la variable et la fonction 
    dropdownOpen= variable
    setDropdownOpen = fonction => change la valeur de la variable
  
    *** Mettre toujours la valeur à l'intérieur d'une fonction*** */ 
  
    const changerDropDownOpen= () => { 
      setDropdownOpen(!dropdownOpen);
    
    };

    return (
      <div className='collapse'>
        <button onClick={changerDropDownOpen} className='collapse-button'>
           {title}
          <FaAngleDown className={`arrow-up ${dropdownOpen && 'active'}`}/>
        </button>
        {
          Array.isArray(content) ? (
            <div className={`collapse-content ${dropdownOpen && 'active-content'} collapse-content-array`}>
              {
              content.map((element) => {
                return <p>{element}</p>
              })
            }
            </div> 
          ) : (
            <div className={`collapse-content ${dropdownOpen && 'active-content'}`}>
              {dropdownOpen && content}
            </div>  
          )       
        }
      </div>
    )
  }
  export default Collapse;
  