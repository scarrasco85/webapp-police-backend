const express = require('express');

const app = express();

const PORT = process.env.PORT || 3005;

app.use(express.json());

app.use(require('./routes/index'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));