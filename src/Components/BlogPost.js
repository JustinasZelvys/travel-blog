import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ post, onDelete, onEdit }) => {
  return (
    <div>
      {post.imageUrl && <img src={post.imageUrl} alt={post.title} width="100" />}
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}...</p>
      <Link to={`/post/${post._id}`}>
        <button>Read More</button>
      </Link>
      <button onClick={() => onEdit(post)}>Edit</button>
      <button onClick={() => onDelete(post._id)}>Delete</button>
    </div>
  );
};

export default BlogPost;