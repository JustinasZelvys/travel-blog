import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ postTitle }) => {
  return (
    <nav className="breadcrumb">
      <Link to="/blog">Blog</Link> &gt; <span>{postTitle}</span>
    </nav>
  );
};

export default Breadcrumb;
