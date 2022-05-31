const { User } = require('../models');
const errorMessage = require('../utils/errorMessage');
const generateJWT = require('../utils/tokenGenerate');

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

const createUser = async ({ displayName, email, password, image }) => {
  const userExists = await User.findOne({ where: { email, password } });
  
  if (userExists) throw errorMessage(409, 'User already registered');

  const createdUser = User.create({ displayName, email, password, image });
  const newUser = {
    id: createdUser.id,
    displayName: createdUser.displayName,
    email: createdUser.email,
    image: createdUser.image,
  };
  const userJwt = generateJWT({ newUser });

  return userJwt;
};

module.exports = {
  getUsers,
  createUser,
};
