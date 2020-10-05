function concat(a, b, callback){   
    setTimeout(function(){     
        var r = a + b     
        callback(r)   
    }, 0) 
} 
 
function upper(a, callback){   
    setTimeout(function(){     
        var r = a.toUpperCase()     
        callback (r)   
    }, 0) 
} 
 
function decor(a, callback){   
    setTimeout(function(){     
        var r = '*' + a + '*'     
        callback (r)   
    }, 0) 
} 
concat('hello', 'world', r1 => 
{   
    upper(r1, r2 => {     
        decor(r2, result => {      
             console.log(result)  // *HELLOWORLD*         
        })
    }) 
}) 