import React from 'react';
import BlogForm from './BlogForm';
import './CreatePost.css';

const CreatePost = ({ onSave }) => {
  return (
    <div className="create-post-container">
      <h2>Create a New Post</h2>
      <BlogForm onSave={onSave} />
    </div>
  );
};

export default CreatePost;
