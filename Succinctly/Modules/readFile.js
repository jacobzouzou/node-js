// //async read
// const fs=require('fs')
// fs.readFile('../assets/data.txt','utf-8',(err,data)=>{
//     if(err) throw err

//     console.log(data)
// })

//sync
const fs=require('fs')
const data=fs.readFileSync('../assets/data.txt','utf-8')
console.log(data)
