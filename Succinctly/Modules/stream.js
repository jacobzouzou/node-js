const http= require('http')
const fs= require('fs')
server= http.createServer((request, response)=>{
    response.writeHead(200, {'ContentType':'text/html'})

    fs.readFile('./index.html',(err,file)=>{
        response.end(file);
    })

    // //readable stream
    // var stream= fs.createReadStream('./index.html')
    // stream.pipe(response)

})

server.listen(8000,()=>{
    console.log("Server runing")
})