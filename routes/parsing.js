const express = require('express');
const parsingController = require('../controllers/parsing');

const router = express.Router();

router.post('/parsing', parsingController.parsing);

module.exports = router;