'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RolesPolice extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.Police, { foreignKey: 'idRol', /* sourceKey: 'idRol' */ });
        }
    };
    RolesPolice.init({
        idRol: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }, 
        nombreRol: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'RolesPolice',
    });
    return RolesPolice;
};