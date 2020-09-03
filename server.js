var express = require("express");


// var path = require("path");
// var fs = require ("fs");

var app = express();
var PORT = 3002 || process.env.PORT ;
app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });