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
        let gifs = response.data.data.map((gif) => [gif.id, gif.images.original.url]); 
        return res.send(gifs);
    })
    .catch((err) => {
        console.log(err);
        res.end();
    })
})

app.get('/search', function(req, res) {
  let query = req.query.words
  axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=wtJN9K7MfH2iWmFotqiHC9leXzTHxgkn&limit=10`)
  .then((response) => {
    let gifs = response.data.data.map((gif) => [gif.id, gif.images.original.url]); 
    return res.send(gifs);
  })
  .catch((err) => {
      console.log(err);
      res.end();
  })
})


app.get('/active', function(req, res) {
    let id = req.query.id
    axios.get(`http://api.giphy.com/v1/gifs/${id}?api_key=wtJN9K7MfH2iWmFotqiHC9leXzTHxgkn`)
    .then((response) => {
      let gif = response.data.data;
      let active = {
          title: gif.title,
          url: gif.images.original.url,
          short_link: gif.bitly_url,
          social: gif.images.downsized_large.url,
          mp4: gif.images.original.mp4,
          small: gif.images.downsized.url,
          embed: gif.embed_url,
          user: gif.username,
          avatar: gif.user.avatar_url
      };

      return res.send(active);
    })
    .catch((err) => {
        console.log(err);
        res.end();
    })
  })


app.listen(process.env.PORT || 8080);