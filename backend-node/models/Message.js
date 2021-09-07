const conn = require('./db');

const Message = conn.define('message', {
    messageText: {
        type: conn.Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Please enter a message' }
        }
    }
})

module.exports = Message;