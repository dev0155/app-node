let router = require('express').Router();
let test = require('../controller/test');
let upload = require('../middleware/upload');
let checkAuth = require('../middleware/protection');

router.get('/', test.findAll);
router.post('/', test.create);
router.get('/:id', test.findById);
router.put('/:id', test.put);
router.delete('/:id', test.delete);

module.exports = router;
