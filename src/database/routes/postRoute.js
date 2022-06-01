const router = require('express').Router();
const jwtValidation = require('../middlewares/jwtMiddleware');
const postController = require('../controllers/postController');

router.get('/', jwtValidation, postController.getPosts);

module.exports = router;