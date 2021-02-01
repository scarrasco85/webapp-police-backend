const router = require('express').Router();
const RolesPoliceController = require('../controllers/rolesPoliceController');

router.get('/getAll', RolesPoliceController.getAll);

module.exports = router