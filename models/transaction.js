module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define("Transaction", {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  return Transaction;
};
