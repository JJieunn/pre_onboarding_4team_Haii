const express = require('express');
const router = express.Router();
const { specs, swaggerUi } = require('../modules/swagger')
const excelDownLoadRoute = require("./excelDownLoad")

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
router.use('/excel', excelDownLoadRoute);

module.exports = router;

