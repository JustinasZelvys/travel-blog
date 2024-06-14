import React, { useEffect, useState } from 'react';
import api from '../api';
import './BestBackpackingLocations.css';

const BestBackpackingLocations = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await api.get('/blogs');
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Only display the first 9 posts
  const displayedPosts = posts.slice(0, 9);

  return (
    <div className="best-backpacking-locations">
      <h2>Best Backpacking Locations</h2>
      <div className="posts-grid">
        {displayedPosts.map(post => (
          <div key={post._id} className="post-item">
            <img src={post.imageUrl} alt={post.title} className="post-image" />
            <p className="post-title">{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestBackpackingLocations;