require("dotenv").config();

var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models");
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var app = express();
var PORT = process.env.PORT || 3000;

//load passport strategies
require('./config/passport/passport.js')(passport, db.User);


db.Transaction.belongsTo(db.User); // Will add UserId to Transactions
db.Transaction.belongsTo(db.Fund); // Will add FundId to Transactions
db.Fund.belongsTo(db.User); // Will add UserId to Funds



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


//Routes

require('./routes/auth.js')(app, passport);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



var syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

app.get("/", function(req, res) {
  res.send("Welcome to Passport with Sequelize");
});

//Sync Database

db.sequelize.sync().then(function () {

  console.log('Nice! Database looks fine')


}).catch(function (err) {

  console.log(err, "Something went wrong with the Database Update!")

});


app.listen(3000, function (err) {

  if (!err)

    console.log("Site is live");

  else console.log(err)

});

module.exports = app;
