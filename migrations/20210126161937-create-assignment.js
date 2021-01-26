'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Assignments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha_ejecucion: {
        type: Sequelize.DATE
      },
      id_turno: {
        type: Sequelize.INTEGER
      },
      num_placa_crea_orden: {
        type: Sequelize.STRING
      },
      firmada_todos: {
        type: Sequelize.BOOLEAN
      },
      pdf_orden_firmada: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Assignments');
  }
};