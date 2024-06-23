import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import BlogForm from './BlogForm';
import './PostDetail.css';

const PostDetail = ({ posts, onUpdate, setSearchQuery }) => {
  const { id } = useParams();
  const post = posts.find(post => post._id === id);

  useEffect(() => {
    setSearchQuery('');
  }, [setSearchQuery]);

  const [isEditing, setIsEditing] = useState(false);

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdate = (updatedPost) => {
    onUpdate(post._id, updatedPost);
    setIsEditing(false);
  };

  return (
    <div className="post-detail-container">
      <Breadcrumb postTitle={post.title} />
      <div className="image-container">
        {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="post-image2" />}
        <div className="image-overlay">
          <h2>{post.title}</h2>
        </div>
      </div>
      <p className="post-content">{post.content}</p>
      <p className="post-author"><strong>Author:</strong> {post.author}</p>
      <button onClick={handleEditClick}>Edit</button>
      {isEditing && (
        <BlogForm onSave={handleUpdate} editPost={post} />
      )}
    </div>
  );
};

export default PostDetail;