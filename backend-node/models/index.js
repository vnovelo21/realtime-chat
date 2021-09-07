const conn = require('./db');
const faker = require('faker');
const User = require('./User');
const Message = require('./Message')

// Model Relationships
Message.belongsTo(User);
User.hasMany(Message);

// Connect to Database
const sync = () => conn.sync({ force: true });

// Seed the database
const seed = () => {
  const users = [{ email: "test@test.com" }, { email: "test2@test2.com" }]
  return sync()
    .then(() => {
      // Users
      return Promise.all(users.map(user => User.create(user)));
    })
    .then((users) => {
      // Messages
      for (let i = 0; i < 5; i++)Message.create({ userId: 1, messageText: faker.lorem.sentence(3,40)});
    })
}

module.exports = {
  models: {
    User,
    Message
  },
  sync,
  seed
}