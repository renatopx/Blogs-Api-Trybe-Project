const { User } = require('../models');
const errorMessage = require('../utils/errorMessage');
const generateJWT = require('../utils/tokenGenerate');

const getLogin = async (email, password) => {
  const userData = await User.findOne({ where: { email, password } });

  if (!userData) throw errorMessage(400, 'Invalid fields');

  const login = {
    id: userData.id,
    displayName: userData.displayName,
    email: userData.email,
    image: userData.image,
  };

  const token = generateJWT({ login });
  return token;
};

module.exports = {
  getLogin,
};