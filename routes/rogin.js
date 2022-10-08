const express = require('express');
const usersController = require('../controllers/rogin');

const router = express.Router();

router.post('/login', usersController.loginController);

module.exports = router;
