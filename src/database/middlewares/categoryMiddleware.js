const Joi = require('joi');
const errorMessage = require('../utils/errorMessage');

const category = Joi.object({
  name: Joi.string().required(),
});

const categoryValidation = (req, _res, next) => {
  const { name } = req.body;
  const { error } = category.validate({ name });

  if (error) throw errorMessage(400, error.message);

  next();
};

module.exports = categoryValidation;