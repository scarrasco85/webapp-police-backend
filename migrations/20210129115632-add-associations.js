'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        // Foreign keys PoliceAssignedOrders table's
        queryInterface.addConstraint('PoliceAssignedOrders', {
            fields: ['idOrden'],
            type: 'foreign key',
            name: 'fkey_PoliceAssignedOrder_Assignment',
            references: { //Required field
                table: 'Assigment',
                field: 'idOrden'
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

        // Foreign keys Police table's
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

        // Foreign keys PoliceSignAssignment table's
        queryInterface.addConstraint('PoliceSignAssignments', {
            fields: ['numPlacaPolice'],
            type: 'foreign key',
            name: 'fkey_PoliceSignAssignments_Police',
            references: { //Required field
                table: 'Police',
                field: 'numPlaca'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });

        queryInterface.addConstraint('PoliceSignAssignments', {
            fields: ['IdOrdenAssignment'],
            type: 'foreign key',
            name: 'fkey_PoliceSignAssignments_Assignment',
            references: { //Required field
                table: 'Assignments',
                field: 'idOrden'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });

        // Foreign keys Assignments table's
        queryInterface.addConstraint('Assignments', {
            fields: ['idTurno'],
            type: 'foreign key',
            name: 'fkey_Assignments_WorkShifts',
            references: { //Required field
                table: 'WorkShifts',
                field: 'idTurno'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });

        queryInterface.addConstraint('Assignments', {
            fields: ['numPlacaCreaOrden'],
            type: 'foreign key',
            name: 'fkey_Assignments_Police',
            references: { //Required field
                table: 'Police',
                field: 'numPlaca'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });

        // Foreign keys PoliceSignNewsReports table's
        queryInterface.addConstraint('PoliceSignNewsReports', {
            fields: ['numPlacaPolice'],
            type: 'foreign key',
            name: 'fkey_PoliceSignNewsReports_Police',
            references: { //Required field
                table: 'Police',
                field: 'numPlaca'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });

        queryInterface.addConstraint('PoliceSignNewsReports', {
            fields: ['numRegistroNewsReport'],
            type: 'foreign key',
            name: 'fkey_PoliceSignNewsReports_NewsReports',
            references: { //Required field
                table: 'NewsReports',
                field: 'numRegistro'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });

        // Foreign keys Tasks table's
        queryInterface.addConstraint('Tasks', {
            fields: ['idOrden'],
            type: 'foreign key',
            name: 'fkey_Tasks_Assignments',
            references: { //Required field
                table: 'Assignments',
                field: 'idOrden'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });

        // Foreign keys NewsReports table's
        queryInterface.addConstraint('NewsReports', {
            fields: ['idOrden'],
            type: 'foreign key',
            name: 'fkey_NewsReports_Assignments',
            references: { //Required field
                table: 'Assignments',
                field: 'idOrden'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });

        return queryInterface;
    },

    down: async(queryInterface, Sequelize) => {

        // Delete foreign keys of PoliceAssignedOrders table's
        queryInterface.removeConstraint(
            'PoliceAssignedOrders',
            'fkey_PoliceAssignedOrder_Assignment'
        );
        queryInterface.removeConstraint(
            'PoliceAssignedOrders',
            'fkey_PoliceAssignedOrder_Police'
        );

        // Delete foreign keys of PoliceAssignedOrders table's
        queryInterface.removeConstraint(
            'Police',
            'fkey_Police_RolesPolice'
        );

        // Delete foreign keys of PoliceSignAssignment table's
        queryInterface.removeConstraint(
            'PoliceSignAssignments',
            'fkey_PoliceSignAssignment_Police'
        );

        queryInterface.removeConstraint(
            'PoliceSignAssignments',
            'fkey_PoliceSignAssignment_Assignment'
        );

        // Delete foreign keys of PoliceCreateAssignments table's
        queryInterface.removeConstraint(
            'PoliceCreateAssignments',
            'fkey_PoliceCreateAssignments_Police'
        );

        queryInterface.removeConstraint(
            'PoliceCreateAssignments',
            'fkey_PoliceCreateAssignments_Assignment'
        );

        // Delete foreign keys of Assignments table's
        queryInterface.removeConstraint(
            'Assignments',
            'fkey_Assignments_WorkShifts'
        );

        queryInterface.removeConstraint(
            'Assignments',
            'fkey_Assignments_Police'
        );

        // Delete foreign keys of PoliceSignNewsReports table's
        queryInterface.removeConstraint(
            'PoliceSignNewsReports',
            'fkey_PoliceSignNewsReports_Police'
        );

        queryInterface.removeConstraint(
            'PoliceSignNewsReports',
            'fkey_PoliceSignNewsReports_NewsReports'
        );

        // Delete foreign keys of Tasks table's
        queryInterface.removeConstraint(
            'Tasks',
            'fkey_Tasks_Assignments'
        );

        // Delete foreign keys of NewsReports table's
        queryInterface.removeConstraint(
            'NewsReports',
            'fkey_NewsReports_Assignments'
        );

        return queryInterface;
    }
};