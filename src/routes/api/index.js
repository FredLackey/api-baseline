const router = require('express').Router();
const m = require('../../middleware');

const apiPrivate = require('./private');
const apiPublic = require('./public');

router.use('/', apiPublic);

router.use(m.requireApiKey);

router.use('/', apiPrivate);

module.exports = router;