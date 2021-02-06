const router = require('express').Router();
const RolesPoliceController = require('../controllers/rolesPoliceController');

router.post('/rolespolice', RolesPoliceController.createRole);
router.get('/rolespolice', RolesPoliceController.getAllRoles);
router.put('/rolespolice/:id', RolesPoliceController.updateRole);
router.delete('/rolespolice', RolesPoliceController.deleteRole);

module.exports = router