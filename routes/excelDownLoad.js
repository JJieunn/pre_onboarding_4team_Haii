const express = require('express');
const excelDownLoadController = require('../controllers/excelDownLoad');

const router = express.Router();

router.get('', excelDownLoadController.excelDownLoadAction);

module.exports = router;