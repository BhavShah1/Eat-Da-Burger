var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var routes = require("./controllers/burgers_controller.js");

//test for connection to server
// var connection = require('./config/connection.js');

// var PORT = 3000;
var app = express();
//when i set the enviorment up i can use JAWS db
app.set("port", (process.env.PORT || 3000));


app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main",}));
app.set("view engine", "handlebars");


//this works for JAWSdb and local host
app.use('/', routes);
app.listen(app.get("port"), function() {
	console.log("You are running on port", app.get("port"));
});

//this works ONLY for local host. 
// app.listen(PORT, function() {
// 	console.log("Hey, You are connected on PORT : " + PORT);
// 	console.log("Press cntrl + c to quit server");
// });