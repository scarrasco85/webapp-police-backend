const { Police, RolesPolice, PoliceAssignedOrder, Assignment, WorkShift } = require('../models');

const PoliceController = {

    // Create a new police in DB
    async register(req, res) {
        try {
            const police = await Police.create(req.body);

            if (!police) {
                return res.status(400).json({
                    ok: false,
                    error: {
                        message: 'An unexpected error occurred while creating the police.',
                        error
                    }
                });
            }

            res.status(201).send({
                ok: true,
                message: 'Police created successfully',
                police
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

    // Get all polices
    async getAll(req, res) {
        try {
            const polices = await Police.findAll({

                attributes: ['numPlaca', 'idRol'],
                include: [{
                    model: RolesPolice
                }]

            });

            if (!polices[0]) {

                return res.status(400).json({
                    ok: false,
                    error: {
                        message: 'Exist any police in DB.',
                    }
                });
            }

            res.status(200).send({
                ok: true,
                polices
            });

        } catch (error) {

            res.status(500).send({
                message: 'Internal error, It was not possible to show the polices registered in DB',
                error
            });

        }
    },

    // Get police by numPlaca
    async getPolice(req, res) {

        try {

            const police = await Police.findOne({

                attributes: ['numPlaca', 'idRol', 'createdAt', 'updatedAt'],
                include: [{
                    model: RolesPolice
                }],
                where: {
                    numPlaca: req.params.numPlaca
                }

            });

            if (!police) {

                return res.status(400).json({
                    ok: false,
                    error: {
                        message: 'numPlaca does not correspond to any police.'
                    }
                });
            }

            res.status(200).send({
                ok: true,
                police
            });

        } catch (error) {

            res.status(500).send({
                message: 'Internal error, It was not possible to show the polices registered in DB',
                error: error
            });

        }
    },

    // Update police by numPlaca
    async updatePolice(req, res) {

        try {

            const police = await Police.update(req.body, {

                where: {
                    numPlaca: req.params.numPlaca
                }

            });

            if (!police[0]) {

                return res.status(400).json({
                    ok: false,
                    error: {
                        message: 'numPlaca does not correspond to any police.'
                    }
                });
            }

            res.status(200).send({
                ok: true,
                message: 'Police updated successfully',
                police
            });

        } catch (error) {

            res.status(500).send({
                message: 'Internal error, It was not possible to update police data',
                error: error
            });

        }
    },

    // Delete police by numPlaca
    async deletePolice(req, res) {

        try {

            const police = await Police.destroy({

                where: {
                    numPlaca: req.params.numPlaca
                }

            });

            console.log({ police });
            if (!police) {

                return res.status(400).json({
                    ok: false,
                    error: {
                        message: 'numPlaca does not correspond to any police.'
                    }
                });
            }

            res.status(200).send({
                ok: true,
                message: 'Police deleted successfully',
                police
            });

        } catch (error) {

            res.status(500).send({
                message: 'Internal error, It was not possible to update police data',
                error: error
            });

        }
    },
    // Pasar este método al controlador de Ordenes
    // Get all orders assigned by police
    async getAssigmentsPolice(req, res) {

        try {

            const assingments = await Assignment.findAll({

                attributes: ['idOrden', 'idTurno', 'fechaCreacion', 'fechaEjecucion', 'numPlacaCreaOrden', 'firmadaTodos', 'pdfOrdenFirmada'],
                raw: true,
                nest: true,
                include: [{
                        model: PoliceAssignedOrder,
                        attributes: ['numPlaca'],
                        where: {
                            numPlaca: req.params.numPlaca
                        },
                        raw: true,
                        nest: true,
                        include: [{

                            model: Police,
                            attributes: ['password']

                        }]
                    },
                    {
                        model: WorkShift,
                        attributes: ['idTurno', 'nombreTurno', 'horaInicio', 'horaFin']
                    }
                ]

            });

            if (!assingments) {

                return res.status(400).json({
                    ok: false,
                    error: {
                        message: 'numPlaca does not correspond to any police.'
                    }
                });
            }

            res.status(200).send({
                ok: true,
                assingments
            });

        } catch (error) {

            res.status(500).send({
                message: 'Internal error, It was not possible to show the polices registered in DB',
                error: error
            });

        }
    }
}

module.exports = PoliceController;