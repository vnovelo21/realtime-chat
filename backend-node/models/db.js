const Sequelize = require('sequelize');

const conn = new Sequelize('challenge', 'root', 'testpass', {
  host: process.env.DATABASE_URL || 'db',
  port: 3306,
  dialect: 'mysql',
  logging: false
});

module.exports = conn;
