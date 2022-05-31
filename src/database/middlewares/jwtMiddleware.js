require('dotenv').config();
const jwt = require('jsonwebtoken');
const errorMessage = require('../utils/errorMessage');

const validateJWT = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) throw errorMessage(401, 'Token not found');

  try {
    const verifyJWT = jwt.verify(authorization, process.env.JWT_SECRET);

    if (!verifyJWT.data) throw errorMessage(401, 'Expired or invalid token');
    next();
  } catch (error) {
    throw errorMessage(401, 'Expired or invalid token');
  }
};

module.exports = validateJWT;