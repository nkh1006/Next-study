const express = require('express');
const cors = require('cors');
const { posts } = require('./data.js');

const app = express();
const PORT = 8080;

app.use(cors);

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
})