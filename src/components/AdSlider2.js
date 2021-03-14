import React, { useState } from 'react';
import DataAd2 from './DataAd2';
import Images from '../components/Images';
import './styles/AdSlider.css';

const AdSlider2 = ({ slides, controles}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const derSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  
  
  const izqSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='slider' >
      <div className={controles}>
        <img className='izq' onClick={izqSlide} src={Images.izquierda} />
        <img className='der' onClick={derSlide} src={Images.derecha} />
      </div>
      {DataAd2.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide actived' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='ad image' className='image' />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AdSlider2;
