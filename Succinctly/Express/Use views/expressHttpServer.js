const express= require('express')
const app= express()
app.set('view engine','jade')
app.set('views','./Views')

//use middleware in app
app.use(requestLogger)

app.get('/',(request,response)=>{
    response.send('<h2>Welcome in Express</h2>')
})

//use middleware in route without config in app needed
app.get('/users',requestLogger,(request,response)=>{
    const userList=[{id:1, name:'ZOUZOU'},{id:2, name:"GODA"}]
    response.send(userList)
})

app.get('/hellojade',(resques, response)=>{
    response.render("Hello",{
        title:'hey',
        messageTitle:'Hello noders',
        messageText:'Time is up.'
    })
})
app.listen(8000,()=>{
    console.log("Express server runing on port: 8000")
})

//middleware
function requestLogger(req, res, next){
    console.log(`${req.method}${req.originalUrl}`)
    next()
}