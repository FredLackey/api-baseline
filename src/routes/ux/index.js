const router = require('express').Router();
const m = require('../../middleware');

const getSomethingPublic = require('./public/get-something-public');
const getSomethingPrivate = require('./private/get-something-private');

router.get('/get-public', getSomethingPublic);

router.use(m.requireJwt);

router.get('/get-private', getSomethingPrivate);

module.exports = router;