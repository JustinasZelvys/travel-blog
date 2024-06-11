import React, { useState, useEffect } from "react";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts"));
    if (savedPosts) {
      setPosts(savedPosts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    if (editPost) {
      setPosts(posts.map((p) => (p.id === post.id ? post : p)));
      setEditPost(null);
    } else {
      setPosts([...posts, post]);
    }
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const editPostHandler = (post) => {
    setEditPost(post);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Travel Blog</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BlogForm onSave={addPost} editPost={editPost} />
      <BlogList
        posts={filteredPosts}
        onDelete={deletePost}
        onEdit={editPostHandler}
      />
    </div>
  );
};

export default App;
