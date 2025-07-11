const router = require('express').Router();

const getSomethingPrivate = require('./get-something-private');

router.get('/get-something-private', getSomethingPrivate);

module.exports = router;