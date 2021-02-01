'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PoliceSignNewsReport extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Police, {
                foreignKey: 'numPlaca'
            });
            this.belongsTo(models.NewsReport, {
                foreignKey: 'numRegistro'
            });
        }
    };
    PoliceSignNewsReport.init({
        numPlacaPolice: DataTypes.STRING,
        numRegistroNewsReport: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'PoliceSignNewsReport',
    });
    return PoliceSignNewsReport;
};