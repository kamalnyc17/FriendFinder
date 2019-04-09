// adding dependancies
var express = require('express');
var bodyParser = require('body-parser');

// creating the express server & defining the PORT
var app = express();
var PORT = process.env.PORT || 8080;

// setting up data parsing
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// including the route files
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// starting the server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})