import React from 'react';
import './BlogPost.css';

const BlogPost = ({ post, onDelete, onReadMore }) => {
  return (
    <div className="post-card">
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="post-image" 
        onClick={() => onReadMore(post._id)}
      />
      <h3 className="post-title" onClick={() => onReadMore(post._id)}>{post.title}</h3>
      <div className="post-buttons">
        <button onClick={() => onReadMore(post._id)} className="btn">Read More</button>
        <button onClick={() => onDelete(post._id)} className="btn">Delete</button>
      </div>
    </div>
  );
};

export default BlogPost;