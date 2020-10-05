page:68/76

npx: npm excecute
/unit testing package:  jest, mocha, ...

//testing
test command : 
    "npx mocha (or jest) file.js"
    mocha default timeout: 2s; after test fails

npx: npm package runner

gulp: task runner. Generally in a Node application, there aren’t many tasks 
    to execute and most of them can be done using the scripts section of the package.json file. 
    Gulp (and Grunt or similar tools) is used in the front-end world, 
    where the JavaScript must be combined into a single file and minimized.  

fix gulp issue: npm i -g gulp-cli --force

gulp-nodemon: allow to automatize tasks
gulp command: gulp 'path/gulpfile.js'
eslint: source code analyzer

//eslint
npm esling file.js
npx eslint --init : configure eslint
