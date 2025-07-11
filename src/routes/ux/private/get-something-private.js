const doSomethingPrivate = (req, res) => {
  res.json({
    message: 'getSomethingPrivate'
  });
};

module.exports = doSomethingPrivate;