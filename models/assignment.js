'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Assignment.init({
    fecha_ejecucion: DataTypes.DATE,
    id_turno: DataTypes.INTEGER,
    num_placa_crea_orden: DataTypes.STRING,
    firmada_todos: DataTypes.BOOLEAN,
    pdf_orden_firmada: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Assignment',
  });
  return Assignment;
};