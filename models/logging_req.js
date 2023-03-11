'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Logging_Req extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Logging_Req.init({
    user_id: DataTypes.INTEGER,
    date_log: DataTypes.DATE,
    log_detail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Logging_Req',
  });
  return Logging_Req;
};