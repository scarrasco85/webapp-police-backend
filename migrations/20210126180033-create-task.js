'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Tasks', {
            idTarea: {
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
            horaPrevista: {
                type: Sequelize.STRING
            },
            horaRealizada: {
                type: Sequelize.STRING
            },
            realizada: {
                type: Sequelize.BOOLEAN
            },
            motivoNoRealizada: {
                type: Sequelize.STRING
            },
            descripcion: {
                type: Sequelize.STRING
            },
            descripcionRealizada: {
                type: Sequelize.STRING
            },
            novedad: {
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
        await queryInterface.dropTable('Tasks');
    }
};