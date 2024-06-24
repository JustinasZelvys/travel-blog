import React from "react";
import { useNavigate } from "react-router-dom";
import BlogPost from "./BlogPost";
import "./BlogList.css";

const BlogList = ({ posts, onDelete }) => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div>
      <div className="blog-list">
        {posts.map((post) => (
          <BlogPost
            key={post._id}
            post={post}
            onDelete={onDelete}
            onReadMore={handleReadMore}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;