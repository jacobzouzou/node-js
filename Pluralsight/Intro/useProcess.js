// process.stdout.write("Enter your first name:");
console.log("Enter your first name:");

process.stdin.on('readable',()=>{    
    const chunck=process.stdin.read();
    if(chunck!=null){
        process.stdout.write("Hello " + chunck);
    }    
});