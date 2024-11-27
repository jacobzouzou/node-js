//server
var app = require('express')();
var server = app.listen(3000);

var io = require('socket.io').listen(server);

io.on('connection', socket => {
    //message from client
    socket.on('client-message', (data) => {
        console.log(data.message);
    });
    //send message to client
    socket.emit('server-message', { message: 'Welcome to server http://localhost:3000!' });
});

//add get route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

console.log('server is runing - listen on port:3000\n\n');