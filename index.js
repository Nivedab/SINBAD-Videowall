
// Initiallising all required modules
var express = require('express');
var socket = require('socket.io');

//Setting up the server using express
var app = express();
var server = app.listen(3000,function(){
  console.log('Listening for requests on port 3000,');
  //app.use(express.static('public/index.html'));
});

//serving index.html file
app.use(express.static('public'));

// Setting up SERVER socket
// Name of the Socket assosiated with server is "io"
var io = socket(server);
io.on('connection', (socket) => {
  console.log('made socket connection', socket.id);

  socket.on('broadcast', function(){
    console.log('working');
  })
});
