import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import SearchBar from './components/SearchBar';
import PostDetail from './components/PostDetail';
import NavBar from './components/NavBar';
import CreatePost from './components/CreatePost';
import api from './api';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await api.get('/blogs');
    setPosts(response.data);
  };

  const addPost = async (post) => {
    try {
      const response = await api.post('/blogs', post);
      setPosts([...posts, response.data]);
    } catch (error) {
      console.error("Error uploading post:", error.response.data);
    }
  };

  const updatePost = async (id, post) => {
    try {
      const response = await api.put(`/blogs/${id}`, post);
      setPosts(posts.map(p => (p._id === id ? response.data : p)));
    } catch (error) {
      console.error("Error updating post:", error.response.data);
    }
  };

  const deletePost = async (id) => {
    await api.delete(`/blogs/${id}`);
    setPosts(posts.filter(post => post._id !== id));
  };

  const filteredPosts = posts.filter(post =>
    (post.title && post.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (post.content && post.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <h1>Travel Blog</h1>
          <Routes>
            <Route path="/" element={
              <>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <BlogList posts={filteredPosts} onDelete={deletePost} />
              </>
            } />
            <Route path="/create" element={<CreatePost onSave={addPost} />} />
            <Route path="/post/:id" element={<PostDetail posts={posts} onUpdate={updatePost} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;