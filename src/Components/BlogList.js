import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogPost from './BlogPost';

const BlogList = ({ posts, onDelete }) => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    // Navigate to the post detail page and clear the search query
    navigate(`/post/${id}`);
  };

  return (
    <div>
      {posts.map(post => (
        <BlogPost 
          key={post._id} 
          post={post} 
          onDelete={onDelete} 
          onReadMore={handleReadMore} 
        />
      ))}
    </div>
  );
};

export default BlogList;
