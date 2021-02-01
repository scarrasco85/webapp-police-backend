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
            this.belongsTo(models.RolesPolice, { foreignKey: 'idRol', /* targetKey: 'idRol' */ });
            this.hasMany(models.PoliceAssignedOrder, { foreignKey: 'numPlaca' });
            this.hasMany(models.PoliceSignAssignment, { foreignKey: 'numPlaca'});
            this.hasMany(models.PoliceSignNewsReport, { foreignKey: 'numPlaca'});
            this.hasMany(models.Assignment, { foreignKey: 'numPlaca'});
        }
    };
    Police.init({
        numPlaca: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        idRol: DataTypes.INTEGER,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Police',
    });
    return Police;
};