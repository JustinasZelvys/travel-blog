const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/blogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log('MongoDB connection error:', err));

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  imageUrl: String,
  author: String
});

const Blog = mongoose.model('Blog', blogSchema);

app.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.send(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).send({ error: error.message });
  }
});

app.post('/blogs', async (req, res) => {
  try {
    const { title, content, imageUrl, author } = req.body;
    const blog = new Blog({ title, content, imageUrl, author });
    await blog.save();
    res.send(blog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).send({ error: error.message });
  }
});

app.put('/blogs/:id', async (req, res) => {
  try {
    const { title, content, imageUrl, author } = req.body;
    const blog = await Blog.findByIdAndUpdate(req.params.id, { title, content, imageUrl, author }, { new: true });
    res.send(blog);
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).send({ error: error.message });
  }
});

app.delete('/blogs/:id', async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.send({ message: 'Blog post deleted' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

