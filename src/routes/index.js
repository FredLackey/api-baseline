const _      = require('cleaner-node');
const router = require('express').Router();
const pkg    = require('../../package.json');
const m      = require('../middleware');

const health = require('./health');

const api = require('./api');
const ux  = require('./ux');

const BASE_URL = process.env.NODE_BASE ? `/${process.env.NODE_BASE}` : '';

router.use(m.reqToConsole);

router.use(`${BASE_URL}/api`, api);
router.use(`${BASE_URL}/ux`,  ux);

router.get(`${BASE_URL}/status`,   health.sendStatus);
router.get(`${BASE_URL}/test/all`, health.testAll);
router.get(`${BASE_URL}/test`,     health.test);
router.get(`${BASE_URL}/ping`,     health.sendPing);

if (BASE_URL) {
  router.get(`/`, sendPing);  
}

module.exports = router;

