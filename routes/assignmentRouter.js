const router = require('express').Router();
const AssignmentController = require('../controllers/assignmentController');

router.post('/assignment', AssignmentController.register);
router.get('/assignment', AssignmentController.getAll);
// router.get('/police/:numPlaca', PoliceController.getPolice);
// router.put('/police/:numPlaca', PoliceController.updatePolice);
// router.delete('/police/:numPlaca', PoliceController.deletePolice);
// router.get('/police/assignments/:numPlaca', PoliceController.getAssigmentsPolice);

module.exports = router;