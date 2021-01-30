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
            this.belongsTo(models.Police);
            this.belongsTo(models.Assignment);
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