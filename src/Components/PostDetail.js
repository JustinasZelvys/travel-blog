import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import BlogForm from './BlogForm';

const PostDetail = ({ posts, onUpdate, setSearchQuery }) => {
  const { id } = useParams();
  const post = posts.find(post => post._id === id);

  useEffect(() => {
    // Clear the search query when the component mounts
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
    <div>
      <Breadcrumb postTitle={post.title} />
      <h2>{post.title}</h2>
      {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
      <p>{post.content}</p>
      <p><strong>Author:</strong> {post.author}</p>
      <button onClick={handleEditClick}>Edit</button>
      {isEditing && (
        <BlogForm onSave={handleUpdate} editPost={post} />
      )}
    </div>
  );
};

export default PostDetail;
