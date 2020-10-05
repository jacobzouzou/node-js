//async read
// const fs=require('fs')
// fs.readFile('./intro/data.txt',(err,data)=>{
//     console.log(data)
// })

//sync
const fs=require('fs')
const data=fs.readFileSync('./intro/data.txt')
console.log(data)
