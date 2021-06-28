'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const validator = require('./middleware/validator');
const logger = require('./middleware/logger');
const app = express();


app.use(logger);


app.get('/person', validator , (req, res) => {
    const nameQuery = {
        name: req.query.name
    }
    res.json(nameQuery)
});

  

app.get('/bad', (req, res) => {
    throw new Error('Server Error');
})

app.use('*', notFound);
app.use(errorHandler)

module.exports = {
    server: app,
    start: (port) => {
        app.listen(port, () => console.log(`Listening on ${port}`))
    }
}







