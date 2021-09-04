const app = require('express').Router();
const models = require('../models').models;


app.get('/', function (req, res) {
   // Find all the messages
   models.Message.findAll()
   .then(messages =>{
    return messages;
   })
   .catch(err => { res.status(403).send(err) });
})

// Message Routes
app.post('/:user', (req, res) => {
  console.log('here')
  models.Message
  .create({ messageText: req.body.message})
  .then(() =>{
    console.log("message created")
    res.send("POST OK"); 
  })
  .catch(function(error) {
    res.send(error);
  })
  // // Find the messages
  // models.Message.findAll({
  // })
  //   .then(message => {
  //     models.Message.create({ messagetext: req.body.message })
  //     return message;
  //   })
  //   .catch(err => { res.status(403).send(err) });
});

module.exports = app;