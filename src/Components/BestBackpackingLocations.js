import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BestBackpackingLocations.css";

const BestBackpackingLocations = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blogs");
        setPosts(response.data.slice(0, 9));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="best-b-center">
      <div className="best-backpacking-locations">
        <h2 className="line">Travel Guides</h2>
        <p>Popular travel blog posts & guides</p>
        <div className="post-grid">
          {posts.map((post) => (
            <div key={post._id} className="post-card">
              <Link style={{ textDecoration: "none" }} to={`/post/${post._id}`}>
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="post-image"
                />
                <h3 className="post-title">{post.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestBackpackingLocations;
