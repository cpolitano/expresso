var io = require("socket.io-client");
var socket = io();

var form = document.getElementById("message__form");
var input = document.getElementById("message__input");
var messages = document.getElementById("messages");

socket.on("connect", function() {
	console.log("socket connection");
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    socket.emit("message input", input.value);
    input.value = "";
    return false;
 });

socket.on("message received", function(message) {
	var newMessage = document.createElement("p");
	newMessage.innerText = message;
    messages.appendChild(newMessage);
});
