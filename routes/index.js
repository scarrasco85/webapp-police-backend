const policeRouter = require('./policeRouter');
const rolesPoliceRouter = require('./rolesPoliceRouter');
const loginRouter = require('./loginRouter');
const checkRole = require('../middleware/checkRole');
const auth = require('../middleware/auth');

const express = require('express');

const app = express();

// Import and use routes of different services
app.use(policeRouter);
app.use(/* checkRole(['jefe']), */auth, rolesPoliceRouter);
app.use(loginRouter);

module.exports = app;