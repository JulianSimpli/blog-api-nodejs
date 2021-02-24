const express = require('express');
const router = express.Router();

const postsController = require('../controllers/postsController');

module.exports = function() {
    router.post('/', postsController.create);

    return router;
}