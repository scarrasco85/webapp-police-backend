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
            this.hasMany(models.PoliceAssignedOrder);
            this.hasMany(models.PoliceSignAssignment);
            this.belongsTo(models.Police, {
                foreignKey: 'numPlaca'
            });
            this.hasMany(models.NewsReport);
            this.belongsTo(models.WorkShift, {
                foreignKey: 'idTurno'
            });
            this.hasMany(models.Task);
        }
    };
    Assignment.init({
        idOrden: DataTypes.INTEGER,
        idTurno: DataTypes.INTEGER,
        fechaCreacion: DataTypes.DATE,
        fechaEjecucion: DataTypes.DATE,
        numPlacaCreaOrden: DataTypes.STRING,
        firmadaTodos: DataTypes.BOOLEAN,
        pdfOrdenFirmada: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Assignment',
    });
    return Assignment;
};