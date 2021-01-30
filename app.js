const express = require('express');
const policeRouter = require('./routes/policeRouter');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

app.use('/police', policeRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));