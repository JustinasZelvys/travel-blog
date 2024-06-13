import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <img src="https://rare-gallery.com/uploads/posts/4533822-thailand-thai-hills-rock-nature-water-birds-sky-clouds-walkway-trees-fresh-relaxing-landscape.jpg" alt="Hero" className="hero-image" />
      <div className="hero-text">
        <h1>Welcome to Our Travel Blog</h1>
        <p>Explore the world with us</p>
      </div>
    </div>
  );
};

export default Hero;
