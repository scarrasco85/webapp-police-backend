const policeRouter = require('./policeRouter');
const rolesPoliceRouter = require('./rolesPoliceRouter');
const loginRouter = require('./loginRouter');
const assignmentRouter = require('./assignmentRouter');


const express = require('express');

const app = express();

// Import and use routes of different services
app.use(policeRouter);
app.use(rolesPoliceRouter);
app.use(loginRouter);
app.use(assignmentRouter);

module.exports = app;