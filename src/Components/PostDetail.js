import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(post => post._id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;