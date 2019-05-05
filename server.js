var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Static directory
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/api.js")(app);
require("./app/routes/pageRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




