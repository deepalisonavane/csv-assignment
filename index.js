require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Routes
const csvRoute = require('./routes/csv.js');

mongoose
    .connect('mongodb://localhost:27017/csvtask')
    .then(() => console.log('DB CONNECTS SUCCESSFULLY'))
    .catch((error) => console.error('DB GOT CRASH'));

    // Middlewares used
    app.use(bodyParser.json());

    app.use('/api', csvRoute);

    const port = process.env.PORT || 3000;

    app.listen(port, () => console.log(`App listening on port ${port}!`));