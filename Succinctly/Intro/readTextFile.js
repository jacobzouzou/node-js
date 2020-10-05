var fs = require('fs');
//Use callback
fs.readFile('./data.txt', (err, data) => { 
    console.log(data);
});