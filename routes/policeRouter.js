const router = require('express').Router();
const PoliceController = require('../controllers/policeController');

router.post('/police', PoliceController.register);
router.get('/police', PoliceController.getAll);
router.get('/police/:numPlaca', PoliceController.getPolice);
router.put('/police/:numPlaca', PoliceController.updatePolice);
router.delete('/police/:numPlaca', PoliceController.deletePolice);
router.get('/police/assignments/:numPlaca', PoliceController.getAssigmentsPolice);

module.exports = router;