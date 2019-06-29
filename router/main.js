let router = require('express').Router();
let testRouter = require('./justTest_it');

router.use('/tester', testRouter);

module.exports = router;
