'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class NewsReport extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Assignment, {
                foreignKey: 'idOrden'
            });
            this.hasMany(models.PoliceSignNewsReport);
        }
    };
    NewsReport.init({
        numRegistro: DataTypes.INTEGER,
        idOrden: DataTypes.INTEGER,
        informe: DataTypes.TEXT,
        firmadoTodos: DataTypes.BOOLEAN,
        pdfNovedadesFirmado: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'NewsReport',
    });
    return NewsReport;
};