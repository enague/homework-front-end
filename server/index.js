const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())

app.get('/trending', function(req, res) {
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=wtJN9K7MfH2iWmFotqiHC9leXzTHxgkn&limit=5')
    .then((response) => {
        let gifs = response.data.data.map((gif) => gif.user.avatar_url) 
        return res.send(gifs)
    })
    .catch((err) => {
        console.log(err)
        res.end()
    })
})


app.listen(process.env.PORT || 8080);