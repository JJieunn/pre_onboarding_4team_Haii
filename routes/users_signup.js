const express = require('express');
const signUpController = require('../controllers/users_signup')
const router = express.Router();



router.post('/signup', signUpController.createUser)


module.exports = router;