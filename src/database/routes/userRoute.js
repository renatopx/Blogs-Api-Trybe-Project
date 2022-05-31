const router = require('express').Router();
const userValidation = require('../middlewares/userMiddleware');
const userController = require('../controllers/userController');

router.post('/', userValidation, userController.create);

module.exports = router;