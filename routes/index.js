const express = require('express');
const router = express.Router();
const { specs, swaggerUi } = require('../modules/swagger')
const usersRouter = require('./users_signup')
const excelDownLoadRoute = require("./excelDownLoad")
const updatemgrRouter = require('./updatemgr')


router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
router.use('/user', usersRouter);
router.use('/update', updatemgrRouter)
router.use('/excel', excelDownLoadRoute);







module.exports = router;

