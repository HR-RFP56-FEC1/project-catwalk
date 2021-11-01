// server 

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const key = require('../auth.js');

const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// add token to requests
app.get('/api/*', (req, res) => {
  console.log('get api: ');
  console.log(req.path);
  const postfix = req.path.replace('/api/', '');
  console.log(postfix);

  // if(req.body )
  axios({
    method: 'get',
    url: apiUrl + postfix,
    headers: {'Authorization': key},
  }).then((results) => {
    console.log(results.data);
    res.send(JSON.stringify(results.data));
  });
  
});

app.post('/api/*', (req, res) => {
  console.log('post api: ');
  console.log(req.path);
  axios({
    method: 'post',
    url: apiUrl + postfix,
    headers: {'Authorization': key},
  }).then((results) => {
    console.log(results.data);
    res.send(JSON.stringify(results.data));
  });

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


