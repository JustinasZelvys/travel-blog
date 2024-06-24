import React from "react";
import Slider from "react-slick";
import "./HeroSlideshow.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlideshow = () => {
  const images = [
    "https://hips.hearstapps.com/hmg-prod/images/ama-dablam-mountain-peak-view-from-chola-pass-royalty-free-image-1623254695.jpg",
    "https://peakvisor.com/photo/SD/New-Zealand-aerial-mountain.jpg",
    "https://www.voyagescribe.com/wp-content/uploads/2020/05/paul-vincent-roll-c61jL_NpAn8-unsplash.jpg",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
        <h1>EXPLORE. DREAM .DISCOVER</h1>
        <p>
          This is a world travel blog featuring beautiful destinations and
          hidden places around the globe.
        </p>
        <p>Please tag along!</p>
        <div className="hero-button">
          <a href="/blog">START EXPLORING</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSlideshow;
