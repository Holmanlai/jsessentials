let express = require('express');
let http = require('http');
let app = express();

app.use(express.static('client'));

let server = http.Server(app);
let io = require('socket.io')(server);

io.on('connection', function (socket) {
  console.log('Connection Established');
  socket.on('message', function (msg) {
    io.emit('message', msg);
  });
});
server.listen(3000, function() {
  console.log('Chat server running');
});
