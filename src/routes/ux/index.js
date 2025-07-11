const router = require('express').Router();
const m = require('../../middleware');

const uxPrivate = require('./private');
const uxPublic = require('./public');

router.use('/', uxPublic);

router.use(m.requireJwt);

router.use('/', uxPrivate);

module.exports = router;