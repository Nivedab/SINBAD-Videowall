
// Making connection (The client socket is establishing connection to server socket)
// Note: server socket is named as 'io' in index.js file
// client socket is named as 'socket'
var socket = io.connect('http://localhost:3000');

var express = require('express');

//getting the button press on index.html
var slideshow_button = document.getElementById('show_slideshow');

//emit events
slideshow_button.addEventListener('click', function(){
  socket.emit('broadcast', 'hello world';
});
