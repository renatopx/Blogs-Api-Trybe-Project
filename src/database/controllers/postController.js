const postService = require('../services/postService');

const getPosts = async (req, res, next) => {  
  try {
    const posts = await postService.getPosts();
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPosts,
};