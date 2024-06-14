import React from 'react';
import './InstagramSection.css';

const InstagramSection = () => {
  const instagramImages = [
    'url1.jpg',
    'url2.jpg',
    'url3.jpg',
    'url4.jpg',
    'url5.jpg',
    'url6.jpg'
  ];

  return (
    <div className="instagram-section">
      <h2>Instagram</h2>
      <div className="instagram-images">
        {instagramImages.map((url, index) => (
          <img key={index} src={url} alt={`Instagram ${index}`} className="instagram-image" />
        ))}
      </div>
    </div>
  );
};

export default InstagramSection;
