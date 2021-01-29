'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class WorkShift extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    WorkShift.init({
        idTurno: DataTypes.INTEGER,
        nombreTurno: DataTypes.STRING,
        horaInicio: DataTypes.TIME,
        horaFin: DataTypes.TIME
    }, {
        sequelize,
        modelName: 'WorkShift',
    });
    return WorkShift;
};