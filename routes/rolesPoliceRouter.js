const router = require('express').Router();
const RolesPoliceController = require('../controllers/rolesPoliceController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.post('/rolespolice', auth, checkRole([1]), RolesPoliceController.createRole);
router.get('/rolespolice', RolesPoliceController.getAllRoles);
router.put('/rolespolice/:id', RolesPoliceController.updateRole);
router.delete('/rolespolice', RolesPoliceController.deleteRole);

module.exports = router