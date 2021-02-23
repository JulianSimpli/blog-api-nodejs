const Sequelize = require('sequelize');
const db = require('../config/db');

const Post = db.define('post', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.STRING,
    content: Sequelize.STRING,
    image: Sequelize.STRING,
    category: Sequelize.STRING
});

module.exports = Post;