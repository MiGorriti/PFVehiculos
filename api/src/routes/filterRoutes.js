const express = require('express');
const { createHandler, filterHandler }= require("../handlers/Handler")
const router = express.Router();

router.post('/product', createHandler);
router.get('/', filterHandler);

module.exports = router;
