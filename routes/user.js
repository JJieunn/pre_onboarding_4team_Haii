const express = require('express');
const usersController = require('../controllers/user');

const router = express.Router();

router.post('/signup', usersController.createUser);
router.post('/login', usersController.login);
router.patch('/update/:mgrId', usersController.updateMgr);



module.exports = router;
