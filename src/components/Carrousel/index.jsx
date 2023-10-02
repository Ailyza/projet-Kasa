import { useState } from 'react';
import './carrousel.css';
import arrow_back from '../../assets/images/arrow_back.png';
import arrow_forward from '../../assets/images/arrow_forward.png';

const Carrousel = ({ pictures }) => {

  const totalPictures = pictures.length;
  const [currentIndex, changeIndex] = useState(0);

  const previous = () => {
    changeIndex(currentIndex=== 0 ? totalPictures -1 : currentIndex -1) 
  };

  const next = () => {
        changeIndex(currentIndex===totalPictures -1 ? 0 : currentIndex +1) 
        /*Si currentIndex est strictement égal au dernier index de l'array alors currentIndex devient zéro */
  };

    return (
    <div id="carousel" className='carousel-wrapper'>
      {pictures.map((slide, index) => {
        return (
          <div
          className={index === currentIndex ? 'slide active' : 'slide'}
          key={index}
          >
            {index === currentIndex && (
            <img className="slide-item" src={slide} alt="slide item" />
            )}
          </div>
        );
        })
      }
      <div className="counter">
        {currentIndex + 1}/{totalPictures}
      </div>
      <img
        onClick={previous}
        src={arrow_back}
        className="left_arrow"
        alt="flèche retour"
      />
      <img
        onClick={next}
        src={arrow_forward}k
        className="right_arrow"
        alt="flèche suivante"
      />
    </div>
    );
};
export default Carrousel;
