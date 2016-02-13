var io = require("socket.io-client");
var socket = io('http://localhost');

socket.on('news', function (data) {
	console.log(data);
	socket.emit('my other event', { my: 'data' });
});

console.log("inside socket connection");