const app = require('express').Router();
const models = require('../models').models;

// G\et all messages
app.get('/', (req, res) => {
   // Find all the messages
   models.Message.findAll()
   .then(messages =>{
    return messages;
   })
   .catch(err => { res.status(403).send(err) });
})

// Get messages based off user id
// app.get('/', (req, res) => {
//   // Find all the messages
//   models.Message.findAll()
//   .then(messages =>{
//    return messages;
//   })
//   .catch(err => { res.status(403).send(err) });
// })

// Message Routes
app.post('/:user', async (req, res) => {
  console.log('about to post');
  models.Message.create({ userId: req.body.userId, messageText: req.body.message})
  .then(() => { 
    console.log('in promise');
    models.Message.findAll()
    .then((messages) => {
      let io = req.app.get('socketio');

      io.emit('message-added', messages);
      res.status(201).send(messages);
    })
  })
});

module.exports = app;