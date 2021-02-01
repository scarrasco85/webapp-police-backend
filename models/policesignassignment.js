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
            this.belongsTo(models.Police, {
                foreignKey: 'numPlaca'
            });
            this.belongsTo(models.Assignment, {
                foreignKey: 'idOrden'
            });
        }
    };
    PoliceSignAssignment.init({
        numPlacaPolice: DataTypes.STRING,
        idOrdenAssignment: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'PoliceSignAssignment',
    });
    return PoliceSignAssignment;
};