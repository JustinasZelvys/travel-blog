import React, { useState, useEffect } from 'react';

const BlogForm = ({ onSave, editPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title);
      setContent(editPost.content);
      setImageUrl(editPost.imageUrl);
    }
  }, [editPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, content, imageUrl });
    setTitle('');
    setContent('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <textarea 
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
      <button type="submit">{editPost ? 'Update' : 'Save'}</button>
    </form>
  );
};

export default BlogForm;