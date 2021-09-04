import openSocket from 'socket.io-client';

const URL = process.env.SERVER_URL || 'http://localhost:18000'
const socket = openSocket(URL);

function subscribeToTx(cb) {
  socket.on('tx', () => cb(null, ''));
}

export { subscribeToTx };