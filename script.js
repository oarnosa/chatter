// location of socket.io
const socket = io('http://localhost:3000');

// get html elements
const messageContainer = document.getElementById('msgs');
const messageForm = document.getElementById('send-form');
const messageInput = document.getElementById('send-msg');

// ask for user name
const name = prompt('What is your name?');
appendMessage(`Hey ${name}, Welcome to Chatter!`, 'welcome');
socket.emit('new-user', name);

// show chat message
socket.on('chat-message', data => {
  console.log(data);
  appendMessage(`${data.name}: ${data.message}`, 'incoming');
});

// show if user is connected
socket.on('user-connected', name => {
  appendMessage(`${name} has entered the chatroom!`, 'connected');
});

// show if user is disconnected
socket.on('user-disconnected', name => {
  appendMessage(`${name} has left the chat room`, 'disconnected');
});

// send message typed by the user
messageForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = messageInput.value;
  appendMessage(`You: ${message}`, 'outgoing');
  socket.emit('send-chat-message', message);
  messageInput.value = '';
});

// display message in new div
function appendMessage(message, type) {
  const messageElement = document.createElement('div');
  messageElement.setAttribute('class', type);
  messageElement.innerText = message;
  messageContainer.append(messageElement);
}
