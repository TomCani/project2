// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // cms route loads signup.html
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // blog route loads signin.html
  app.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signin.html"));
  });

  // // authors route loads author-manager.html
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  // });

};
