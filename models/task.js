'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Task extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Assignment);
        }
    };
    Task.init({
        idTarea: DataTypes.INTEGER,
        idOrden: DataTypes.INTEGER,
        horaPrevista: DataTypes.STRING,
        horaRealizada: DataTypes.STRING,
        realizada: DataTypes.BOOLEAN,
        motivoNoRealizada: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        descripcionRealizada: DataTypes.STRING,
        novedad: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Task',
    });
    return Task;
};