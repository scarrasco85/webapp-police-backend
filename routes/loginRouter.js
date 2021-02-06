const router = require('express').Router();
const LoginController = require('../controllers/loginController');

router.post('/login', LoginController.login);

module.exports = router;