const express = require('express');
const router = express.Router();

const postsController = require('../controllers/postsController');

module.exports = function() {
    router.get('/', postsController.postsHome);

    return router;
}