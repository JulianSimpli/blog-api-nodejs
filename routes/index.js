const express = require('express');
const router = express.Router();

const postsController = require('../controllers/postsController');

module.exports = function() {
    router.post('/posts', postsController.create);
    router.get('/posts', postsController.allPosts);

    return router;
}