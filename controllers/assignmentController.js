const { Assignment, Police } = require('../models');

const AssignmentController = {

    // Create a new Assignment in DB
    async register(req, res) {
        try {
            const assignment = await Assignment.create(req.body);

            if (!assignment) {
                return res.status(400).json({
                    ok: false,
                    error: {
                        message: 'An unexpected error occurred while creating the assignment.',
                        error
                    }
                });
            }

            res.status(201).send({
                ok: true,
                message: 'Assignment created successfully',
                assignment
            });

        } catch (error) {

            return res.status(500).json({
                ok: false,
                error: {
                    message: 'Internal error, the format of some data may not be correct or it violates the primary key.',
                    error
                }
            });
        }
    },

    // Get all assignments
    async getAll(req, res) {
        try {
            const assignments = await Assignment.findAll({

                attributes: ['idOrden', 'fechaCreacion', 'fechaEjecucion', 'firmadaTodos', 'pdfOrdenFirmada', 'createdAt', 'updatedAt', 'numPlacaCreaOrden'],
                include: [{
                    model: Police
                }]

            });

            if (!assignments[0]) {

                return res.status(400).json({
                    ok: false,
                    error: {
                        message: 'Exist any assignment in DB.',
                    }
                });
            }

            res.status(200).send({
                ok: true,
                assignments
            });

        } catch (error) {

            res.status(500).send({
                message: 'Internal error, It was not possible to show the assignments registered in DB',
                error
            });

        }
    },

}

module.exports = AssignmentController;