function concat(a, b, callback){   
    setTimeout(() => {     
        var r = a + b;     
        callback(r);   
    }, 0) 
} 
 
function upper(a, callback){   
    setTimeout(() => {     
        var r = a.toUpperCase();     
        callback (r);   
    }, 0) 
} 
 
function decor(a, callback){   
    setTimeout(() => {     
        var r = '* ' + a + ' *';  
        callback (r);  
    }, 0) 
} 

//Promise
function concatAsync(a,b){
    return new Promise(resolve=>{
        concat(a,b, resolve);
    })
}

function upperAsync(a){
    return new Promise(resolve=>{
        upper(a, resolve);
    })
}

function decorAsync(result){
    return new Promise(resolve=>{
        decor(result,resolve)
    })
}

//review js bind
concatAsync('hello ', 'world')   
    .then(upperAsync.bind(this))   
    .then(decorAsync.bind(this))   
    .then(console.log)