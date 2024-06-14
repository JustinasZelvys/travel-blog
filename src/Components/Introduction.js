import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className="introduction">
      <img src="path-to-your-introduction-image.jpg" alt="Introduction" className="introduction-image" />
      <div className="introduction-text">
        <h2>About Us</h2>
        <p>
          Welcome to our travel blog. We share the most amazing travel experiences, tips, and guides. Our mission is to inspire and help you explore the world with confidence and curiosity.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
