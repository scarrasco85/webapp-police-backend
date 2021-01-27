'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PoliceSignAssignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PoliceSignAssignment.init({
    idOrdenAssignment: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PoliceSignAssignment',
  });
  return PoliceSignAssignment;
};