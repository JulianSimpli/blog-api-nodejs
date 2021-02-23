const { Sequelize } = require('sequelize');

const db = new Sequelize('blogsdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;