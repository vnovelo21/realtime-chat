const conn = require('./db');

const User = conn.define('user', {
    email: {
        type: conn.Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: { msg: 'Please complete Email' },
        }
    }
}, {
        indexes: [{ unique: true, fields: ['email'] }]
    });

module.exports = User;