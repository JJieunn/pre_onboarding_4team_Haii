const express = require('express');
const router = express.Router();
const parsing = require('./parsing');

const { specs, swaggerUi } = require('../modules/swagger');

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

router.use("", parsing);

module.exports = router;

