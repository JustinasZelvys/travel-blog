import React from 'react';
import './FeaturedOn.css';

const FeaturedOn = () => {
  const featuredLogos = [
    'https://theworldtravelguy.com/wp-content/uploads/2023/08/NBC_News_n3.png',
    'https://theworldtravelguy.com/wp-content/uploads/2023/08/USA_Today_n5.jpg',
    'https://theworldtravelguy.com/wp-content/uploads/2024/01/TIME-history_sm.jpg',
    'https://theworldtravelguy.com/wp-content/uploads/2023/08/Travel_Leisure_n3.jpg',
    'https://theworldtravelguy.com/wp-content/uploads/2023/08/BBC_Travel_n3.jpg'
  ];

  return (
    <div className="featured-on">
      <h1>Featured</h1>
      <div className="featured-logos">
        {featuredLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Featured logo ${index}`} className="featured-logo" />
        ))}
      </div>
    </div>
  );
};

export default FeaturedOn;
