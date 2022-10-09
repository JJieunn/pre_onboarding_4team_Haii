const express = require('express');
const router = express.Router();
const { specs, swaggerUi } = require('../modules/swagger');
const loginRouter = require('./rogin');

router.use(loginRouter);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = router;
