'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Police', // name of Source model
      'idRol', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'RolesPolice', // name of Target model
          key: 'idRol', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Police', // name of Source model
      'idRol' // key we want to remove
    );
  }
};
