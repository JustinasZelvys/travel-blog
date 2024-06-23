import React, { useState, useEffect } from 'react';
import './BlogForm.css';

const BlogForm = ({ onSave, editPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title);
      setContent(editPost.content);
      setImageUrl(editPost.imageUrl);
      setAuthor(editPost.author);
    }
  }, [editPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, content, imageUrl, author });
    setTitle('');
    setContent('');
    setImageUrl('');
    setAuthor('');
  };

  return (
    <div className="blog-form-container">
      <form onSubmit={handleSubmit} className="blog-form">
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <textarea 
          className="content-input"
          placeholder="Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        ></textarea>
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
          required 
        />
        <button type="submit">{editPost ? 'Update' : 'Save'}</button>
      </form>
    </div>
  );
};

export default BlogForm;