"use strict";

// require('dotenv').load();

var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.render("index.html");
});

io.on("connection", function(socket) {
	socket.emit("news", { hello: "world" });
});

http.listen(2222, function(){
	console.log("server running on port 2222");
});
