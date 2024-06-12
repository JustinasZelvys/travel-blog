import React from 'react';
import './BlogPost.css';

const BlogPost = ({ post, onDelete, onReadMore }) => {
  return (
    <div className="blog-post">
      <div className="blog-post-image">
        {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
      </div>
      <div className="blog-post-content">
        <h2>{post.title}</h2>
        <p>{post.content.substring(0, 100)}...</p>
        <div className="blog-post-buttons">
          <button onClick={() => onReadMore(post._id)}>Read More</button>
          <button onClick={() => onDelete(post._id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
