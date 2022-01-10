import React from 'react';
import SliderAds from 'react-slick';

const Slider = ({ slides }) => {
  const settings1 = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const settings2 = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="slider-cont">
      <div className="slider-ads">
        <SliderAds {...settings1}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img className="img-ads" src={slide.src} alt={slide.name} />
            </div>
          ))}
        </SliderAds>
      </div>
      <div className="slider-ads">
        <SliderAds {...settings2}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img className="img-ads" src={slide.src} alt={slide.name} />
            </div>
          ))}
        </SliderAds>
      </div>
    </div>
  );
};

export default Slider;
