const userService = require('../services/userService');

const getUsers = async (_req, res, next) => {
  try {
    const user = await userService.getUsers();
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const token = await userService.createUser(req.body);
    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  create,
};