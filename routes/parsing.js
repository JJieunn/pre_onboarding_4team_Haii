const express = require('express');
const parsingController = require('../controllers/parsing');

const router = express.Router();

router.post('', parsingController.parsingDatas);

module.exports = router;