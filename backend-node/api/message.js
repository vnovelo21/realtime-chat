const app = require('express').Router();
const models = require('../models').models;

// Get all messages
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