'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
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
=======
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
    fechaEjecucion: DataTypes.DATE,
    idTurno: DataTypes.INTEGER,
    numPlacaCreaOrden: DataTypes.STRING,
    firmadaTodos: DataTypes.BOOLEAN,
    pdfOrdenFirmada: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Assignment',
  });
  return Assignment;
>>>>>>> 221ade1f7b7dc9df138f02f60463639e930b9b6d
};