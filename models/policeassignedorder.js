'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PoliceAssignedOrder extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Police, { foreignKey: 'numPlaca' });
            this.belongsTo(models.Assignment, { foreignKey: 'idOrden' });
        }
    };
    PoliceAssignedOrder.init({
        idOrden: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        numPlaca: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'PoliceAssignedOrder',
    });
    return PoliceAssignedOrder;
};