const policeRouter = require('./policeRouter');
const rolesPoliceRouter = require('./rolesPoliceRouter');

const express = require('express');

const app = express();

// Import and use routes of different services
app.use(policeRouter);

app.use(rolesPoliceRouter);

module.exports = app;