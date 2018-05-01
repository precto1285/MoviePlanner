var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultlayout: "main"}));
app.set("view engine", "handlebars");


app.get("/", function(req, res){
    connection.query("SELECT * FROM movie order by id", function(err, result){
        if (err) throw err;

        res.render("index", { movie:result });
    });
});

app.post("/movies", function(req, res){
    connection.query("INSERT INTO movies (movies) VALUES(?)", [req.body.movie], function(err, result){
        if (err) throw err;

        res.redirect("/");
    });
});

app.put("/movies", function(req, res){

});

app.delete("/movies", function(req, res){

});


var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P!n0yR0ck*',
    database: 'moviePlannerDB'
});  

connection.connect(function(err){
    if(err){
        console.log("error connecting: " + err.stack);
        return;
    }

    console.log("Connect as id: " + connection.threadId);
});



app.listen(PORT, function(){
    console.log("Server listening on: https//localhost:" + PORT);
});
