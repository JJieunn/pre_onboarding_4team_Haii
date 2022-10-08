const express = require('express');
const router = express.Router();
const { specs, swaggerUi } = require('../modules/swagger')
const usersRouter = require('./users_signup')

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
router.use('/users', usersRouter);

module.exports = router;

