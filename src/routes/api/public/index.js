const router = require('express').Router();

const doSomethingPublic = require('./do-something-public');

router.post('/do-something-public', doSomethingPublic);

module.exports = router;