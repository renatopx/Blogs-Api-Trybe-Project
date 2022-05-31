const categoryService = require('../services/categoryService');

const getCategories = async (_req, res, next) => {
  try {
    const categories = await categoryService.getCategories();
    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const createCategory = await categoryService.create(name);
    return res.status(201).json(createCategory);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCategories,
  create,
};