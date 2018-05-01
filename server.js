var express = require('express');
var mysql = require('mysql');

var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultlayout: "main"}));
app.set("view engine", "handlebars");

app.listen(PORT, function(){
    console.log("Server listening on: https//localhost:" + PORT);
});
