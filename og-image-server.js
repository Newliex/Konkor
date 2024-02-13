// og-image-server.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

app.get('/og-image', async (req, res) => {
  try {
    const url = req.query.url;
    const response = await fetch(url);
    const body = await response.buffer();
    res.set('Content-Type', 'image/png');
    res.send(body);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
