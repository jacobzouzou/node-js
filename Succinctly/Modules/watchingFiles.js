const fs=require('fs')
const watcher=fs.watch('./')
watcher.on('change', function(event, fileName){
    console.log(`${event} on file ${fileName} `)
})