'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('NewsReports', {
            numRegistro: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            idOrden: {
                allowNull: false,
                autoIncrement: false,
                type: Sequelize.INTEGER
            },
            informe: {
                type: Sequelize.TEXT
            },
            firmadoTodos: {
                type: Sequelize.BOOLEAN
            },
            pdfNovedadesFirmado: {
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
        await queryInterface.dropTable('NewsReports');
    }
};