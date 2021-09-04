const express = require('express');

// Models and Routes
const db = require('./models');
const userRoutes = require('./api/user');

// Initiate the Express Server
const app = express();

app.use(require('body-parser').json());

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Define the basic route
app.get('/', (req, res, next) => res.status(200).send('API Hello'));

// Define the subroutes
app.use('/api/user', userRoutes);

// Seed the database
db.seed();

// Create a HTTP Server
var http = require('http').Server(app);

// Create a socket connection
var io = require('socket.io')(http, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true
    }
});

// Event handling
io.on('connection', (client) => {
  client.on('subscribeToTx', (interval) => {
    setInterval(() => {
      client.emit('tx', new Date());
    }, interval);
  });

  client.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', { message: message })
  })
});

// Attach io to the app
app.io = io;

// Start Listening
const port = process.env.PORT || 8000;
http.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = http;