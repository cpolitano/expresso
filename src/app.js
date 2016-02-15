var io = require("socket.io-client");
var socket = io();

socket.on("connect", function () {
	console.log("socket connection");
});

socket.on("news", function (data) {
	console.log(data);
	socket.emit("received news event", { my: "data" });
});
