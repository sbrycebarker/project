const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      passport = require('passport'),
      config = require('./config.js'),
      cors = require('cors'),
      request = require('request')


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use(express.static('public'));


app.get('/api/weather/data/:city/:country', function(req, res) {
  console.log(req.params);
  console.log(req.body)
  var city = req.params.city;
  var country = req.params.country;
  console.log(city, country);
  request.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=ca745d64c069805e15fa79364802f256', function(err, response, raw) {
    if (err) {
      res.status(500).send(err)
    }else {
      res.status(200).send(raw);
    }
  })
})



app.listen(3000 , function() {
  console.log("connnected to port 3000")
})
