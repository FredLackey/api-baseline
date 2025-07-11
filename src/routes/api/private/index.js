const router = require('express').Router();

const doSomethingPrivate = require('./do-something-private');

router.post('/do-something-private', doSomethingPrivate);

module.exports = router;