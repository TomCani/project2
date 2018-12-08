var db = require("../models");

module.exports = function(app) {
  // Get all Funds
  app.get("/api/funds", function(req, res) {
    db.Fund.findAll({}).then(function(dbFund) {
      res.json(dbFund);
    });
  });
  // Get one Fund
  app.get("/api/funds/:id", function(req, res) {
    db.Fund.findOne({ where: { id: req.params.id } }).then(function(dbFund) {
      res.json(dbFund);
    });
  });

  // Create a new Fund
  app.post("/api/funds", function(req, res) {
    db.Fund.create(req.body).then(function(dbFund) {
      res.json(dbFund);
    });
  });
  // Update a new Fund
  app.put("/api/funds", function(req, res) {
    db.Fund.create(req.body).then(function(dbFund) {
      res.json(dbFund);
    });
  });

  // Delete a Fund by id
  app.delete("/api/funds/:id", function(req, res) {
    db.Fund.destroy({ where: { id: req.params.id } }).then(function(dbFund) {
      res.json(dbFund);
    });
  });
};
