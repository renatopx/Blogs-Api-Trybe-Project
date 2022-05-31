const Joi = require('joi');

const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;
  const { error } = login.validate({ email, password });
  if (error) { 
    return res.status(400).json({ message: 'Some required fields are missing' }); 
  }

  next();
};

module.exports = loginValidation;