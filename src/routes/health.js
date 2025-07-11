const _   = require('cleaner-node');
const pkg = require('../../package.json');
// const c   = require('../connectors');

const getStatus = () => ({
  name  : pkg.name,
  alias : process.env.NODE_ALIAS || '(not set)',
  base  : process.env.NODE_BASE || '(not set)',
  desc  : pkg.description,
  env   : process.env.NODE_ENV || '(not set)',
  ver   : pkg.version,
  date  : (new Date()).toISOString()
})

const sendStatus = async (req, res) => {
  const data = getStatus();
  data.vars = _.getVars();
  return res.json(data);
}
const test = async (req, res) => {
  const data = getStatus();
  data.vars = _.getVars();
  data.tests = {
    // otherApi: await c.otherApi.ping()
  };
  return res.json(data);
}
const testAll = async (req, res) => {
  const data = getStatus();
  data.vars = _.getVars();
  data.tests = {
    // otherApi: await c.otherApi.testAll()
  };
  return res.json(data);
}
const sendPing = (req, res) => {
  const data = getStatus();
  return res.json(data);
}

module.exports = {
  sendStatus,
  test,
  testAll,
  sendPing
}