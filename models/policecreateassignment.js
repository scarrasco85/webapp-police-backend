'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PoliceCreateAssignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PoliceCreateAssignment.init({
    idOrdenAssignment: DataTypes.INTEGER,
    fechaCreacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'PoliceCreateAssignment',
  });
  return PoliceCreateAssignment;
};