var ports = require('./../controller/port.js');
var path = require('path');
module.exports = function(app){
    //routes
    // this route will be triggered if any of the routes above did not match
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  });
}