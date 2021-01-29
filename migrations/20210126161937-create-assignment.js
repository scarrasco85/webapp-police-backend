'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Assignments', {
            idOrden: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            fechaEjecucion: {
                type: Sequelize.DATE
            },
            idTurno: {
                allowNull: false,
                autoIncrement: false,
                type: Sequelize.INTEGER
            },
            numPlacaCreaOrden: {
                allowNull: false,
                type: Sequelize.STRING
            },
            firmadaTodos: {
                type: Sequelize.BOOLEAN
            },
            pdfOrdenFirmada: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('Assignments');
    }
};