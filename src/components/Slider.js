import React from 'react';
import SliderAds from 'react-slick';
import ProductoCards from './ProductoCards';

const Slider = ({ slides }) => {
  const settings1 = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="slider-cont">
      <div className="slider-ads">
        <SliderAds {...settings1}>
          {slides?.map((info) => (
            <ProductoCards producto={info} />
          ))}
        </SliderAds>
      </div>
    </div>
  );
};

export default Slider;
