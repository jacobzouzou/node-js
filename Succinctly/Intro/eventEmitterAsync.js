const EvEmitter=require('events').EventEmitter;
const emiter=new EvEmitter();
//on each event setImmmediate is called with callback to execute at end of task
emiter.on('event',n => {
    setImmediate(()=>console.log(n * 10));
});

for (let index = 0; index < 10; index++) {
    emiter.emit('event', index);    
}
