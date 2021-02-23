const express = require('express');
const routes = require('./routes');
const db = require('./config/db');

require('./models/Post');
db.sync()
    .then(() => console.log(`Connected to server`))
    .catch(err => console.log(err));

const app = express();

app.use('/', routes());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});