const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())

//Gets all trending gifs urls from GIPHY API
app.get('/trending', function(req, res) {
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=wtJN9K7MfH2iWmFotqiHC9leXzTHxgkn&limit=30')
    .then((response) => {
        let gifs = response.data.data.map((gif) => [gif.id, gif.images.original.url]); 
        return res.send(gifs);
    })
    .catch((err) => {
        console.log(err);
        res.end();
    })
})

//Gets the gifs urls from GIPHY API based on query from search
app.get('/search', function(req, res) {
  let query = req.query.words
  axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=wtJN9K7MfH2iWmFotqiHC9leXzTHxgkn&limit=500`)
  .then((response) => {
    let gifs = response.data.data.map((gif) => [gif.id, gif.images.original.url]); 
    return res.send(gifs);
  })
  .catch((err) => {
      console.log(err);
      res.end();
  })
})

//Gets the specific gif's info that was clicked on to store all necessary info in state to display in modal
app.get('/active', function(req, res) {
    let id = req.query.id
    axios.get(`http://api.giphy.com/v1/gifs/${id}?api_key=wtJN9K7MfH2iWmFotqiHC9leXzTHxgkn`)
    .then((response) => {
      let gif = response.data.data;
      let active = {
          id: gif.id ? gif.id: '',
          title: gif.title ? gif.title : '',
          url: gif.images ? gif.images.original.url : '',
          short_link: gif.bitly_url ? gif.bitly_url : '',
          social: gif.images.downsized_large.url ? gif.images.downsized_large.url : '',
          mp4: gif.images.original.mp4 ? gif.images.original.mp4 : '',
          small: gif.images.downsized.url ? gif.images.downsized.url : '',
          embed: gif.embed_url ? gif.embed_url : '',
          user: gif.username ? gif.username : 'Anonymous',
          avatar: gif.user ? gif.user.avatar_url : 'https://media.giphy.com/media/3ohc0W4869hlSOmTrG/giphy.gif'
      };

      return res.send(active);
    })
    .catch((err) => {
        console.log(err);
        res.end();
    })
  })


app.listen(process.env.PORT || 8080);