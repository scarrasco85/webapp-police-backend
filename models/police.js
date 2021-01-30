'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Police extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.RolesPolice);
            this.hasMany(models.PoliceAssignedOrder);
            this.hasMany(models.PoliceSignAssignment);
            this.hasMany(models.PoliceSignNewsReport);
            this.hasMany(models.Assignment);
            this.hasMany(models.Assignment);
        }
    };
    Police.init({
        numPlaca: DataTypes.STRING,
        idRol: DataTypes.INTEGER,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Police',
    });
    return Police;
};