module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define("Transaction", {
    fundId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  // Transaction.belongsTo("User"); // Will add companyId to user

  return Transaction;
};
