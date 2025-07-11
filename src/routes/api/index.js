const router = require('express').Router();
const m = require('../../middleware');

const doSomethingPublic = require('./public/do-something-public');
const doSomethingPrivate = require('./private/do-something-private');

router.get('/do-public', doSomethingPublic);

router.use(m.requireApiToken);

router.get('/do-private', doSomethingPrivate);


module.exports = router;