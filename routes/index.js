const express = require('express');
const router = express.Router();
const { specs, swaggerUi } = require('../modules/swagger')

const updatemgrRouter = require('./updatemgr')

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
router.use('/update', updatemgrRouter)

const excelDownLoadRoute = require("./excelDownLoad")


router.use('/excel', excelDownLoadRoute);


module.exports = router;

