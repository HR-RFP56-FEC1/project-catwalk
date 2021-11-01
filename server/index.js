// server 

const express = require('express');
const app = express();
const port = 3000;
const key = require('./auth.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


