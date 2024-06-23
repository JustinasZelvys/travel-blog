import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import BlogForm from './BlogForm';
import './PostDetail.css';
import Sidebar from './Sidebar'; // Import Sidebar

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

  // Placeholder for the about me data
  const aboutMe = {
    image: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula dapibus bibendum.'
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
      <div className="content-sidebar-wrapper">
        <div className="post-content-wrapper">
          <p className="post-content">{post.content}</p>
          <p className="post-author"><strong>Author:</strong> {post.author}</p>
          <button onClick={handleEditClick}>Edit</button>
          {isEditing && (
            <BlogForm onSave={handleUpdate} editPost={post} />
          )}
        </div>
        <div className="sidebar-wrapper">
          <Sidebar aboutMe={aboutMe} />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;