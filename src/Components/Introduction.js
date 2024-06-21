import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introduction">
      <img
        src="./thailand.jpg"
        alt="Introduction"
        className="introduction-image"
      />
      <div className="introduction-text">
        <h4>Thanks For Looking!</h4>
        <p>
          I'm Justin, the guy behind this website. I'm an Lithuanian who's
          been traveling the world full time.
        </p>
        <p>
          I started this travel blog in 2024 to document my own international
          trips, share my photos, and help others learn how to travel the world
          and find some really good spots off the beaten path.
        </p>
        <p>
          I'm currently based in Bali, Indonesia.
        </p>
        <p>
          I've worked with and been featured by BBC Travel, NBC News, Time, and
          other companies.
        </p>
        <p>
          I haven’t been everywhere, but it’s on my list. I hope this world
          travel blog can help and inspire you in your own journeys as well!
        </p>
      </div>
    </div>
  );
};

export default Introduction;
