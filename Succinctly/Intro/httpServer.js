const http=require('http');
const server= http.createServer((request, response)=>{
    response.writeHead(200, {'ContentType':'text/html'});
    if(request.url==="/about"){
        response.write("<h2>About Node.js</h2>")
    }
    else{
        response.write("<h2>Welcome to node.js</h2>")
    }
    response.end();
});

server.listen(8000,()=>{
    console.log("Server runining on port:8000");
});