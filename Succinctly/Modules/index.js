var greet = require('./greeter')
var user = require('./exportObject')
var execTime = require('./exportObject')
 
greet('Pitchou')
console.log(user.name)
console.log(user.getFullName())
console.log(execTime.executionTime)
