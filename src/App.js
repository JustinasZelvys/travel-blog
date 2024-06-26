import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import SearchBar from "./components/SearchBar";
import PostDetail from "./components/PostDetail";
import NavBar from "./components/NavBar";
import CreatePost from "./components/CreatePost";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import api from "./api";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await api.get("/blogs");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const addPost = async (post) => {
    try {
      const response = await api.post("/blogs", post);
      setPosts([...posts, response.data]);
      alert("Great! The post has been created.");
    } catch (error) {
      console.error("Error uploading post:", error);
    }
  };

  const updatePost = async (id, post) => {
    try {
      const response = await api.put(`/blogs/${id}`, post);
      setPosts(posts.map((p) => (p._id === id ? response.data : p)));
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const deletePost = async (id) => {
    try {
      await api.delete(`/blogs/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const filteredPosts = posts.filter(
    (post) =>
      (post.title &&
        post.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (post.content &&
        post.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/blog"
            element={
              <div className="main-content">
                <div className="content">
                  <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                  />
                  <BlogList posts={filteredPosts} onDelete={deletePost} />
                </div>
              </div>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create" element={<CreatePost onSave={addPost} />} />
          <Route
            path="/post/:id"
            element={
              <PostDetail
                posts={posts}
                onUpdate={updatePost}
                setSearchQuery={setSearchQuery}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
