import React from "react";
import HeroSlideshow from "./HeroSlideshow";
import FeaturedOn from "./FeaturedOn";
import Introduction from "./Introduction";
import BestBackpackingLocations from "./BestBackpackingLocations";
import GetInTouch from "./GetInTouch";
import InstagramSection from "./InstagramSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <HeroSlideshow />
      <FeaturedOn />
      <Introduction />
      <BestBackpackingLocations />
      <GetInTouch />
      <InstagramSection />
      <Footer />
    </div>
  );
};

export default Home;
