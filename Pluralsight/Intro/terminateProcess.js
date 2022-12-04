setTimeout(() => {
    process.exit();    
}, 2000);

process.on('exit',()=>{
    console.log('By, see you later!');
});

console.log('Hello!');