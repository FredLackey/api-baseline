const router = require('express').Router();

const getSomethingPublic = require('./get-something-public');

router.get('/get-something-public', getSomethingPublic);

module.exports = router;