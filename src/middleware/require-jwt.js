const jwt = require('jsonwebtoken');

const requireJwt = (req, res, next) => {
  // Get bearer token from header
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  // Verify token
  const token = bearerToken.split(' ')[1];

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Add decoded token to request
  req.session = {
    token: {
      value: token,
      data: decoded
    }
  };
  next();
};

module.exports = requireJwt;