const EvEmitter = require('events').EventEmitter;
const emiter = new EvEmitter();

emiter.on('newEvent', n => console.log(n * 10));

for (let index = 0; index < 10; index++) {
    emiter.emit('newEvent', index);
}