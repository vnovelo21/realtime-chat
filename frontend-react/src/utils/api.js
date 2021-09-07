const URL = process.env.API_URL || 'http://localhost:18000/api'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  "Access-Control-Request-Headers": "*",
  "Access-Control-Request-Method": "*"
}

// Get all the messages
// TODO: Connect to component
export function getMessages() {
  return fetch(`${URL}/message`, {
    headers
  })
    .then(res => res.json())
    .then(data => ({messages: data}));
}

// Get all the new messages based on id
// TODO: Connect to component
export function getMessagesbyId(id) {
  return fetch(`${URL}/message/${id}`, {
    headers
  })
    .then(res => (res.json()));
}

// Add message
// TODO: Connect to component
export function addMessage(message, userId) {
  return fetch(`${URL}/message/${userId}`, {
    method: 'POST',
    body: JSON.stringify({userId: userId, message: message}),
    headers
  })
    .then(res => (res.json()));
}

// Login user
export function loginUser(email) {
  return fetch(`${URL}/user`, {
    method: 'POST',
    body: JSON.stringify({ email: email }),
    headers
  })
    .then(res => (res.json()));
}