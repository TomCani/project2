var db = require("../models");

module.exports = function(app) {
  // Get all Transactions
  app.get("/api/transactions", function(req, res) {
    db.Transaction.findAll({}).then(function(dbTransaction) {
      res.json(dbTransaction);
    });
  });
  // Get one Transaction
  app.get("/api/transactions/:id", function(req, res) {
    db.Transaction.findOne({ where: { id: req.params.id } }).then(function(dbTransaction) {
      res.json(dbTransaction);
    });
  });

  // Create a new Transaction
  app.post("/api/transactions", function(req, res) {
    db.Transaction.create(req.body).then(function(dbTransaction) {
      res.json(dbTransaction);
    });
  });
  // Update a new Transaction
  app.put("/api/transactions", function(req, res) {
    db.Transaction.create(req.body).then(function(dbTransaction) {
      res.json(dbTransaction);
    });
  });

  // Delete a Transaction by id
  app.delete("/api/funds/:id", function(req, res) {
    db.Transaction.destroy({ where: { id: req.params.id } }).then(function(dbTransaction) {
      res.json(dbTransaction);
    });
  });
};
