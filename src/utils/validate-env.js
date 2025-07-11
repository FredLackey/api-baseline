const _ = require('cleaner-node');
const c = require('../constants');

const getMissingEnvVars = () => {
  let result = [];
  result.push(...c.REQUIRED_ENV_STRINGS.filter(envVar => !_.isDefined(process.env[envVar])));
  result.push(...c.REQUIRED_ENV_NUMBERS.filter(envVar => !_.isDefined(process.env[envVar]) || !_.isNumber(process.env[envVar])));
  result.push(...c.REQUIRED_ENV_BOOLEANS.filter(envVar => !_.isDefined(process.env[envVar]) || !_.isBoolean(process.env[envVar])));
  return result;
}
const getInvalidEnvVars = () => {
  let result = [];
  result.push(...c.REQUIRED_ENV_STRINGS.filter(envVar => _.isDefined(process.env[envVar]) && !_.isValidString(process.env[envVar])));
  result.push(...c.REQUIRED_ENV_NUMBERS.filter(envVar => _.isDefined(process.env[envVar]) && !_.isNumber(process.env[envVar])));
  result.push(...c.REQUIRED_ENV_BOOLEANS.filter(envVar => _.isDefined(process.env[envVar]) && !_.isBoolean(_.toBoolean(process.env[envVar]))));
  return result;
}

const validateEnv = () => {

  const missingEnvVars = getMissingEnvVars();
  if (missingEnvVars.length > 0) {
    return `Missing required environment variables: ${missingEnvVars.join(', ')}`;
  }

  const invalidEnvVars = getInvalidEnvVars();
  if (invalidEnvVars.length > 0) {
    return `Invalid environment variables: ${invalidEnvVars.join(', ')}`;
  }

  return null;
};

module.exports = validateEnv;