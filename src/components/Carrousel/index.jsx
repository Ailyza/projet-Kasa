import { useState } from 'react';
import './carrousel.css';
import arrow_back from '../../assets/images/arrow_back.png';
import arrow_forward from '../../assets/images/arrow_forward.png';

const Carrousel = ({ pictures }) => {

  const totalPictures = pictures.length-1;
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    setCurrentIndex(currentIndex=== 0 ? totalPictures : currentIndex -1) 
     /*Si currentIndex est égal a 0 alors on met totalPicture sinon currentIndex -1*/
    };

  const next = () => {
        setCurrentIndex(currentIndex===totalPictures ? 0 : currentIndex +1) 
        /*Si currentIndex est strictement égal au dernier index de l'array alors currentIndex devient zéro 
         Une fois arrivé à la derniere slide on initialise creentIndex à 0 pour le mettre au début*/

  };
  console.log({pictures})
  console.log(totalPictures)

    return (
    <div id="carousel" className='carousel-wrapper'>
      {pictures.map((slide, index) => {
        return (
          <div
          className={index === currentIndex ? 'slide active' : 'slide'}
          key={index}
          >
            {index === currentIndex && (
              /* si index est égal au meme nombre de crurrntIndex alors on affiche l'image avec l'URL slide sinon rien ne s'affiche*/ 
            <img className="slide-item" src={slide} alt="slide item" />
            )}
          </div>
        );
        })
      }
      <div className="counter">
        {currentIndex + 1}/{totalPictures +1}
      </div>
      <img
        onClick={previous}
        src={arrow_back}
        className="left_arrow"
        alt="flèche retour"
      />
      <img
        onClick={next}
        src={arrow_forward}
        className="right_arrow"
        alt="flèche suivante"
      />
    </div>
    );
};
export default Carrousel;
