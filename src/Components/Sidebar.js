import React from 'react';
import './Sidebar.css';

const Sidebar = ({ links }) => {
  return (
    <div className="sidebar">
      <h2>Other Great Pages for Travelers</h2>
      {links.map((link, index) => (
        <div className="sidebar-block" key={index} onClick={() => window.open(link.url, "_blank")}>
          <img src={link.image} alt={link.title} />
          <div className="sidebar-block-text">
            <h3>{link.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;