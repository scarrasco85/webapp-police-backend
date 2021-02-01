const { Police, RolesPolice } = require('../models');

const PoliceController = {
    async register(req, res) {
        try {
            const police = await Police.create(req.body);
            res.status(201).send({
                message: 'Policia creado satisfactoriamente',
                police
            });
        } catch (error) {
            res.status(500).send({
                message: 'Hubo un error al intentar crear el registro',
                error
            });
        }
    },

    async getAll(req, res) {
        try {
            const polices = await Police.findAll({
                attributes: ['numPlaca', 'idRol'],
                include: [{
                    model: RolesPolice
                }]
            });
            res.status(200).send({
                polices
            })
        } catch (error) {
            res.status(500).send({
                message: 'Hubo un error al intentar mostrar los policías',
                error
            })
        }
    }
}

module.exports = PoliceController;