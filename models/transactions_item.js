'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transactions_Item.init({
    transaction_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transactions_Item',
  });
  return Transactions_Item;
};