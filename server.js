var express = require('express');
var cors = require('cors'); // Require the CORS middleware
var app = express();
var fs = require('fs');

// Use CORS middleware for all routes
app.use(cors());

// Endpoint to Get a list of users
app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data);
    });
});

app.get('/getProducts', function(req, res){
    fs.readFile(__dirname + "/" + "products.json", 'utf8', function(err, data){
        res.end(data);
    });
});

// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("REST API demo app listening at http://%s:%s", host, port);
});
