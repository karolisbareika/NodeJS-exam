const jwt = require('jsonwebtoken');
const { secretKey } = require('../config')

const isAuthenticated = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, secretKey);
      req.user = decodedToken;
      return next();
    } catch (error) {
      return res.status(401).send({ err: 'Invalid token' });
    }
  };
  

  module.exports = isAuthenticated;
  