module.exports = function(sequelize, DataTypes) {
    var Transaction = sequelize.define("Transaction", {
      fund_id: {
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
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
    });
    return Transaction;
  };