import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts, onDelete, onEdit }) => {
  return (
    <div>
      {posts.map(post => (
        <BlogPost 
          key={post.id} 
          post={post} 
          onDelete={onDelete} 
          onEdit={onEdit} 
        />
      ))}
    </div>
  );
};

export default BlogList;
