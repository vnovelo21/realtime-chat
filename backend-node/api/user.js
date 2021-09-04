const app = require('express').Router();
const models = require('../models').models;

// User Routes
app.post('/', (req, res, next) => {

  // Find the email
  models.User.findOne({
    where: {
      email: req.body.email,
    }
  })
    .then(user => {
      // If User not found, create one
      if (user === null) {
        return models.User.create({ email: req.body.email })
      }
      return user;
    })
    .then(user => {
      // Send back the user id
      res.send({ user });
    })
    .catch(err => { res.status(403).send(err) });
});

module.exports = app;