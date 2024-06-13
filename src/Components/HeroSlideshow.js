import React from 'react';
import Slider from 'react-slick';
import './HeroSlideshow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlideshow = () => {
  const images = [
    'https://cdn.britannica.com/06/96306-050-DFE8AFDC/Khao-Tapu-Ao-Phang-na-Thailand-National-Park.jpg',
    'https://www.travelandleisure.com/thmb/nDDNqO2EctQhiIfZrxeXTF47zhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-koh-phi-phi-PLACESTHAILAND1023-09b9d347b3cd4844b4ae19e4e06a9a6d.jpg'
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <div className="hero-slideshow">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index}`} className="hero-image" />
          </div>
        ))}
      </Slider>
      <div className="hero-text">
        <h1>Welcome to Our Travel Blog</h1>
        <p>Explore the world with us</p>
      </div>
    </div>
  );
};

export default HeroSlideshow;
