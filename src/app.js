var io = require("socket.io-client");
var socket = io();

socket.on("connect", function () {
	console.log("socket connection");
});

socket.on("news", function (data) {
	console.log(data);
	socket.emit("received news event", { my: "data" });
});

var form = document.getElementById("message__form");
var input = document.getElementById("message__input");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    socket.emit("message input", input.value);
    input.value = "";
    return false;
 });
