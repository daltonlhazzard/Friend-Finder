var path = require("path");


module.exports = function(app) {

  

  app.get("/Questions", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/questions.html"));
  });

  



};
