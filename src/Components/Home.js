import React from 'react';
import HeroSlideshow from './HeroSlideshow';
import FeaturedOn from './FeaturedOn';
import Introduction from './Introduction';
import BestBackpackingLocations from './BestBackpackingLocations';

const Home = () => {
  return (
    <div>
      <HeroSlideshow />
      <FeaturedOn />
      <Introduction />
      <BestBackpackingLocations />
      <div>
        <h1>Home</h1>
        <p>Welcome to the Home page.</p>
      </div>
    </div>
  );
};

export default Home;
