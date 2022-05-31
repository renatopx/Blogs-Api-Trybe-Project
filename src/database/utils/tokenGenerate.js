require('dotenv').config();
const jwt = require('jsonwebtoken');

const configJwt = {
  algorithm: 'HS256',
  expiresIn: '12h',
};

const generateJWT = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, configJwt);
  return token;
};

module.exports = generateJWT;