const router = require('express').Router();
const loginValidation = require('../middlewares/loginMiddleware');
const loginController = require('../controllers/loginController');

router.post('/', loginValidation, loginController.getLogin);

module.exports = router;