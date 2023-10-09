import React,{useState} from 'react'
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
        { /*Si dropdownOpen est (true) la class active d'applique*/}
        { /*$ sert à faire du JS et les bactique englobe le code */}
        </button>
        {
           /*si content est un tableau(true) on affiche la liste sinon on affiche la description 
           */
          Array.isArray(content) ? (
           
            <div className={`collapse-content ${dropdownOpen && 'active-content'} collapse-content-array`}>
              {
              content.map((element, index) => {
                return <p key={index}>{element}</p>
                { /*key= identifie chaque element p */}
              })
            }
             { /*utilisation de map si c'est un tableau*/}
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
  