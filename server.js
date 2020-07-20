var express = require("express");
var path = require("path");
var fs = require ("fs");

var app = express();
var PORT = 3000 || process.env.PORT ;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });


app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
  });
  
app.get("/api/notes", function(req, res) {
    var db = require("./db/db.json")
    console.log("db", db)
    res.json(db);
  });


// app.get("/assets/js/index", function(req, res) {
//     res.sendFile(path.join(__dirname, "assets", "js", "index.js"));
//   });
  
app.use(express.static('public')); 

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });