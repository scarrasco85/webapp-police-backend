'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('WorkShifts', {
            idTurno: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nombreTurno: {
                type: Sequelize.STRING
            },
            horaInicio: {
                type: Sequelize.TIME
            },
            horaFin: {
                type: Sequelize.TIME
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('WorkShifts');
    }
};