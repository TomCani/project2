require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

//For BodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// For Passport
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Models
var models = require("./app/models");

//Routes

var authRoute = require('./app/routes/auth.js')(app, passport);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//load passport strategies

require('./app/config/passport/passport.js')(passport, models.user);


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

app.get("/", function(req, res) {
  res.send("Welcome to Passport with Sequelize");
});

//Sync Database

models.sequelize.sync().then(function () {

  console.log('Nice! Database looks fine')


}).catch(function (err) {

  console.log(err, "Something went wrong with the Database Update!")

});


app.listen(5000, function (err) {

  if (!err)

    console.log("Site is live");

  else console.log(err)

});

module.exports = app;
