//async read
const fs=require('fs')
const data="Hello World!"
fs.writeFile('../readme.txt',data,(err)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log("File is written")
    }
})

//sync
// const fs=require('fs')
// const data=fs.readFileSync('../data.txt')
// console.log(data)
