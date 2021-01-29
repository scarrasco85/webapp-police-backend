'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        // queryInterface.addColumn(
        //     //return queryInterface.addColumn(
        //     'Police', // name of Source model
        //     'idRol', // name of the key we're adding 
        //     {
        //         type: Sequelize.INTEGER,
        //         references: {
        //             model: 'RolesPolice', // name of Target model
        //             key: 'idRol', // key in Target model that we're referencing
        //         },
        //         onUpdate: 'CASCADE',
        //         onDelete: 'SET NULL',
        //     }
        // );

        queryInterface.addConstraint('Police', {
            fields: ['idRol'],
            type: 'foreign key',
            name: 'fkey_Police_RolesPolice',
            references: { //Required field
                table: 'RolesPolice',
                field: 'idRol'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });

        queryInterface.addConstraint('PoliceAssignedOrders', {
            fields: ['numPlaca'],
            type: 'foreign key',
            name: 'fkey_PoliceAssignedOrder_Police',
            references: { //Required field
                table: 'Police',
                field: 'numPlaca'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });

        return queryInterface;
    },

    down: async(queryInterface, Sequelize) => {
        queryInterface.removeColumn(
            'Police', // name of Source model
            'idRol' // key we want to remove
        );

        queryInterface.removeConstraint(
            'PoliceAssignedOrders',
            'fkey_PoliceAssignedOrder_Police'
        );

        return queryInterface;
    }
};