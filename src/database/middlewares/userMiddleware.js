const Joi = require('joi');

const user = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const userValidation = (req, _res, next) => {
  const { displayName, email, password } = req.body;
  const { error } = user.validate({ displayName, email, password });

  if (error) next({ status: 400, message: error.message });

  next();
};

module.exports = userValidation;