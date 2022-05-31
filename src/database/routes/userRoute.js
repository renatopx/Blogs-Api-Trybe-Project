const router = require('express').Router();
const userValidation = require('../middlewares/userMiddleware');
const userController = require('../controllers/userController');
const jwtValidation = require('../middlewares/jwtMiddleware');

router.get('/', jwtValidation, userController.getUsers);
router.get('/:id', jwtValidation, userController.getUserById);
router.post('/', userValidation, userController.create);

module.exports = router;