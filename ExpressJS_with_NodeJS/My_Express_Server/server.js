const express = require('express');
const app = express();

app.get('/', function(request, response) {
    response.send("<h1>Hello World</h1>");
});

app.get('/contact', function(req, res) {
    res.send("Contact me at: abcd@email.com")
});

app.get('/about', function(req, res) {
    res.send("<h1>Adham Jami</h1>")
});

app.get('/love', function(req, res) {
    res.send("<h1><em>Kaoutar</em></h1>")
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});