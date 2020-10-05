// const path = require('path')
// const fullPath = path.join('path', 'readme.txt') 
// console.log(fullPath)

//dir name
const path = require('path')
const fullPath = path.join(__dirname, 'readme.txt') 
console.log(fullPath)

//decomposing path
const parts =path.parse(fullPath)
console.log(parts)
