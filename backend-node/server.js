const express = require('express');
const cors = require('cors');

// Models and Routes
const db = require('./models');
const userRoutes = require('./api/user');
const messageRoutes = require('./api/message');


// Initiate the Express Server
const app = express();

app.use(require('body-parser').json());
app.use(cors());

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


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
  console.log(`${client.id} connected`);
  client.on('subscribeToTx', (interval) => {
    setInterval(() => {
      client.emit('tx', new Date());
    }, interval);
  });

  client.on('message-added', (messages) => {
    console.log(messages);
  })

  client.on('disconnect', () => {
    console.log(`socket ${client.id} disconnected`);
  })
});

// Define the basic route
app.get('/', (req, res, next) => res.status(200).send('API Hello'));

// Define the subroutes
app.use('/api/user', userRoutes);
app.use('/api/message', messageRoutes);

// Seed the database
db.seed();

// Attach io to the app
app.set('socketio', io);

// Start Listening
const port = process.env.PORT || 8000;
http.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = http;