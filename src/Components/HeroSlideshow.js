import React from 'react';
import Slider from 'react-slick';
import './HeroSlideshow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlideshow = () => {
  const images = [
    'https://afar.brightspotcdn.com/dims4/default/68ef509/2147483647/strip/false/crop/1440x720+0+0/resize/1440x720!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fcf%2F8a%2F20b4a2c544a58be93512ad67084c%2Fbohler-japankk-4006.jpg',
    'https://img.taste.com.au/jUGIU1GJ/taste/2020/07/landmark-pagoda-in-doi-inthanon-national-park-at-chiang-mai-thailand-163355-1.jpg',
    'https://peakvisor.com/photo/SD/New-Zealand-aerial-mountain.jpg'
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
