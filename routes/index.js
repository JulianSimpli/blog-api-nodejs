const express = require('express');
const router = express.Router();

const postsController = require('../controllers/postsController');

module.exports = function() {
    router.post('/posts', postsController.create);
    router.get('/posts', postsController.allPosts);
    router.get('/posts/:id', postsController.findOnePost);
    router.patch('/posts/:id', postsController.updatePost);

    return router;
}