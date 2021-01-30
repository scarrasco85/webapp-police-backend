const router = require('express').Router();
const PoliceController = require('../controllers/policeController');

router.post('/register', PoliceController.register);
router.get('/getAll', PoliceController.getAll);

module.exports = router;