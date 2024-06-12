import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = ({ postTitle }) => {
  return (
    <nav className="breadcrumb">
      <Link to="/">Home</Link> &gt; <span>{postTitle}</span>
    </nav>
  );
};

export default Breadcrumb;