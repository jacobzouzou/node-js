//server
var app = require('express')();
var server  = app.listen(3000);
var io      = require('socket.io').listen(server);

io.on('connection', socket=>{
    console.log('new user is connected');
    socket.on('client-message', (data)=>{
        console.log(data.message);
    });
    socket.emit('server-message',{message:'Welcome!'}); 
});

//add get route
app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
});

console.log('server is runing - listen on port:3000');