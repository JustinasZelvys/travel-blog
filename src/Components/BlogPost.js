import React, { useState } from 'react';

const BlogPost = ({ post, onDelete, onEdit }) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{showFull ? post.content : `${post.content.substring(0, 100)}...`}</p>
      <button onClick={() => setShowFull(!showFull)}>
        {showFull ? 'Show Less' : 'Read More'}
      </button>
      <button onClick={() => onEdit(post)}>Edit</button>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  );
};

export default BlogPost;
