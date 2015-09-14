'use strict';

require('dotenv').load();

var express = require('express'); 

var app = express();

app.get('/', function(req, res){
  res.send('<h1>oh hai</h1>');
});

app.get('/blog', function(req, res){

});

app.listen(3000, function(){
  console.log('Frontend server running on port 3000');
  // console.log(process.env.YELP_API_KEY);
});