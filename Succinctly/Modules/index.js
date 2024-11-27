var greet = require('./greetings')
var user = require('./exportObject')
var execTime = require('./exportDateObject')
 
greet(user.getFullName());
console.log(execTime().executionTime);
