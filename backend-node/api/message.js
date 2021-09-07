const app = require('express').Router();
const models = require('../models').models;

// G\et all messages
app.get('/', (req, res) => {
   // Find all the messages
   models.Message.findAll()
   .then(messages =>{
    let io = req.app.get('socketio');
    io.emit('subscribeToTx', messages);
    res.status(200).send(messages);
  })
   .catch(err => { res.status(403).send(err) });
})

// Get messages based off user id
// app.get('/', (req, res) => {
//   // Find all the messages
//   models.Message.findAll({
//     where: {
//       userId: req.body.userId
//     }
//   })
//   .then(messages =>{
//    return messages;
//   })
//   .catch(err => { res.status(403).send(err) });
// })

// Message Routes
app.post('/:user', async (req, res) => {
  models.Message.create({ userId: req.body.userId, messageText: req.body.message})
  .then(() => { 
    models.Message.findAll()
    .then((messages) => {
      let io = req.app.get('socketio');
      io.emit('subscribeToTx', messages);
      res.status(201).send(messages);
    })
  })
});

module.exports = app;