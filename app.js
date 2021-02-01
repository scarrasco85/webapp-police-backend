const express = require('express');
const policeRouter = require('./routes/policeRouter');
const rolesPoliceRouter = require('./routes/rolesPoliceRouter');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

app.use('/police', policeRouter);
app.use('/rolespolice', rolesPoliceRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));