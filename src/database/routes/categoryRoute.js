const router = require('express').Router();
const categoryValidation = require('../middlewares/categoryMiddleware');
const categoryController = require('../controllers/categoryController');
const jwtValidation = require('../middlewares/jwtMiddleware');

router.get('/', jwtValidation, categoryController.getCategories);
router.post('/', jwtValidation, categoryValidation, categoryController.create);

module.exports = router;