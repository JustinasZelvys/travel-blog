import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts, onDelete }) => {
  return (
    <div>
      {posts.map(post => (
        <BlogPost 
          key={post._id} 
          post={post} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default BlogList;
