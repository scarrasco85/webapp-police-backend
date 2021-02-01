const { RolesPolice, Police } = require('../models');

const RolesPoliceController = {
    async getAll(req, res) {
        try {
            const rolesPolice = await RolesPolice.findAll({
                attributes: ['idRol', 'nombreRol'],
                include: [{
                    model: Police,
                    attributes: ['numPlaca']
                }]
            });
            res.status(200).send({
                rolesPolice
            })
        } catch (error) {
            res.status(500).send({
                message: 'Hubo un error al intentar mostrar los roles de policía',
                error
            })
        }
    }
}

module.exports = RolesPoliceController;