import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [createdAt, setCreatedAt] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, content, imageUrl, author, createdAt });
  };

  return (
    <div className="create-post-container">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="datetime-local"
          placeholder="Created At"
          value={createdAt.toISOString().substring(0, 16)}
          onChange={(e) => setCreatedAt(new Date(e.target.value))}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreatePost;
