const express = require('express');
const bodyParse = require('body-parser');
const request = require('request');
const app = express();

app.use(bodyParse.urlencoded({extended: true}));

app.listen(3000, function(){
    console.log('Server running on port 3000')
});

app.get('/', function(req,res){
    res.send("<h1>Hello world</h1>");
});