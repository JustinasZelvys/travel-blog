import React, { useState, useEffect } from 'react';

const BlogForm = ({ onSave, editPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title);
      setContent(editPost.content);
    }
  }, [editPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, content, id: editPost ? editPost.id : Date.now() });
    setTitle('');
    setContent('');
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
      <button type="submit">{editPost ? 'Update' : 'Save'}</button>
    </form>
  );
};

export default BlogForm;
