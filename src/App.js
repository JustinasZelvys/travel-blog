import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import SearchBar from './components/SearchBar';
import PostDetail from './components/PostDetail';
import NavBar from './components/NavBar';
import api from './api';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
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
      let response;
      if (editPost) {
        response = await api.put(`/blogs/${editPost._id}`, post);
        setPosts(posts.map(p => (p._id === editPost._id ? response.data : p)));
        setEditPost(null);
      } else {
        response = await api.post('/blogs', post);
        setPosts([...posts, response.data]);
      }
    } catch (error) {
      console.error("Error uploading post:", error.response.data);
    }
  };

  const deletePost = async (id) => {
    await api.delete(`/blogs/${id}`);
    setPosts(posts.filter(post => post._id !== id));
  };

  const editPostHandler = (post) => {
    setEditPost(post);
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
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Routes>
            <Route path="/" element={
              <>
                <BlogForm onSave={addPost} editPost={editPost} />
                <BlogList posts={filteredPosts} onDelete={deletePost} onEdit={editPostHandler} />
              </>
            } />
            <Route path="/post/:id" element={<PostDetail posts={posts} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;