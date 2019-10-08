// location of socket.io
const socket = io('http://localhost:3000');

// get html elements
const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

// ask for user name
// const name = prompt('What is your name?');
let name = 'Orlando';
appendMessage(`Hey ${name}, Welcome to Chatter!`);
socket.emit('new-user', name);

// show chat message
socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`);
});

// show if user is connected
socket.on('user-connected', name => {
  appendMessage(`${name} has entered the chatroom!`);
});

// show if user is disconnected
socket.on('user-disconnected', name => {
  appendMessage(`${name} has left the chat room`);
});

// send meesage typed by the user
messageForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = messageInput.value;
  appendMessage(`You: ${message}`);
  socket.emit('send-chat-message', message);
  messageInput.value = '';
});

// display message in new div
function appendMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messageContainer.append(messageElement);
}
