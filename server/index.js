const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())

app.get('/trending', function(req, res) {
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=wtJN9K7MfH2iWmFotqiHC9leXzTHxgkn&limit=10')
    .then((response) => {
        let gifs = response.data.data.map((gif) => gif.images.original.url) 
        return res.send(gifs)
    })
    .catch((err) => {
        console.log(err)
        res.end()
    })
})

app.get('/search', function(req, res) {
  let query = req.query.words
  console.log('query', query)
  axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=wtJN9K7MfH2iWmFotqiHC9leXzTHxgkn&limit=10`)
  .then((response) => {
    let gifs = response.data.data.map((gif) => gif.images.original.url) 
    console.log(gifs)
    return res.send(gifs)
  })
  .catch((err) => {
      console.log(err)
      res.end()
  })
})

app.listen(process.env.PORT || 8080);