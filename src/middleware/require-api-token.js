const requireApiToken = (req, res, next) => {
  const apiToken = req.headers['x-api-token'];
  if (!apiToken || apiToken !== process.env.API_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

module.exports = requireApiToken;