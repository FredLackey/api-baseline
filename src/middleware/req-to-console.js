const reqToConsole = (req, res, next) => {

  if (process.env.NODE_ENV === 'production') {
    return next();
  }

  const reqData = {
    url: `${req.method} ${req.url}`
  };

  if (process.env.NODE_DEBUG === 'true') {
    reqData.body = req.body;
  }

  console.log(JSON.stringify(reqData, null, 2));

  return next();

}

module.exports = reqToConsole;