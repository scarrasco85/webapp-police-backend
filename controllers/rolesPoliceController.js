const { RolesPolice, Police } = require('../models');

const RolesPoliceController = {

    async createRole(req, res) {
        try {
            const role = await RolesPolice.create(req.body);
            res.status(201).send({
                message: 'Nuevo rol creado satisfactoriamente',
                role
            });
        } catch (error) {
            res.status(500).send({
                message: 'Hubo un error al intentar crear un nuevo rol',
                error
            });
        }
    },
    async getAllRoles(req, res) {
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
    },

    async updateRole(req, res) {
        try {
            const updateRole = await RolesPolice.update(req.body, {
                where: { idRol: req.params.id }
            });
            res.status(201).send({
                message: 'El nombre del rol se ha cambiado correctamente',
                updateRole
            });
        } catch (error) {
            res.status(500).send({
                message: 'Hubo un error al intentar actualizar el rol',
                error
            })
        }
    },

    async deleteRole(req, res) {
        try {
            const deleteRole = await RolesPolice.destroy({
                where: { nombreRol: req.body.nombreRol }
            });
            res.status(201).send({
                message: 'El rol se ha eliminado correctamente',
                deleteRole
            })
        } catch (error) {
            res.status(500).send({
                message: 'Hubo un error al intentar eliminar el rol',
                error
            })
        }
    }
}

module.exports = RolesPoliceController;