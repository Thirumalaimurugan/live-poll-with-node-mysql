var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require("path");
var mysql = require("mysql");
var http = require('http').Server(app);
var io = require('socket.io')(http);
var public = path.join(__dirname, 'public');
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(public));


// Require Database operation and router files.
var options = require('./config/config.js');
console.log(options.databaseOptions);
var connection = mysql.createConnection(options.databaseOptions);
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

var pollModel = require('./models/pollModel')(connection);
var pollController = require('./controller/pollController')(io, pollModel);
var routes = require("./routes/routing.js")(router, path, public, pollController);


app.use('/', router);

http.listen(3000, function() {
    console.log("Listening on 3000");
});