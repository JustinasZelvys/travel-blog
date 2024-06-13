import React from 'react';
import HeroSlideshow from './HeroSlideshow';
import FeaturedOn from './FeaturedOn';

const Home = () => {
  return (
    <div>
      <HeroSlideshow />
      <FeaturedOn />
      <div>
        <h1>Home</h1>
        <p>Welcome to the Home page.</p>
      </div>
    </div>
  );
};

export default Home;
