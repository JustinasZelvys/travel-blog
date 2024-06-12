import React from 'react';
import BlogForm from './BlogForm';

const CreatePost = ({ onSave }) => {
  return (
    <div>
      <h2>Create a New Post</h2>
      <BlogForm onSave={onSave} />
    </div>
  );
};

export default CreatePost;