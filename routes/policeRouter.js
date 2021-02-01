const router = require('express').Router();
const PoliceController = require('../controllers/policeController');

router.post('/police', PoliceController.register);
router.get('/police', PoliceController.getAll);

module.exports = router;