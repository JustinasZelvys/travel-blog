import React from "react";
import HeroSlideshow from "./HeroSlideshow";
import FeaturedOn from "./FeaturedOn";
import Introduction from "./Introduction";
import BestBackpackingLocations from "./BestBackpackingLocations";
import GetInTouch from "./GetInTouch";
import InstagramSection from "./InstagramSection";

const Home = () => {
  return (
    <div>
      <HeroSlideshow />
      <FeaturedOn />
      <Introduction />
      <BestBackpackingLocations />
      <GetInTouch />
      <InstagramSection />
    </div>
  );
};

export default Home;
