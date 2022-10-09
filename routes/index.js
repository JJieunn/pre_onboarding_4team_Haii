const express = require('express');
const router = express.Router();
const { specs, swaggerUi } = require('../modules/swagger');

const usersRouter = require('./user');

const excelDownLoadRoute = require('./excelDownLoad');

router.use('/user', usersRouter);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

router.use('/excel', excelDownLoadRoute);

module.exports = router;
