npm: https://wwww.npmjs.com

npm account: 
    id: nanok
    pwd:!jacobzouzou$1

package: module, is folder that contain code
"npm install" without params: use package package-lock.json, get package from github by default
npm install -D : for development only
npm init --yes : create package.json file
npm help command: 

semantic versioning: Major.Minor.Patch (bug fix): https://semver.npmjs.com
    ^:1.2.3 (1.x.y with x >=2 and y >= 3 )
    ~:1.2.3 (1.2.x with x >= 3 )

npm install: local (80%) or globaly (install path is show)
    globaly: npm -i -g package
    local: npm install package: install in node_modules folder of parent folder if exists.

Publish npm package:
1 create moduleName.js file
2 create package folder for mudule: add moduleName.js in folder
3 init npm in package folder: npm init --yes
4 publish package: 
    npm login: npm id, password
    npm publish (npm install your package to use it)
 

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
    Gulp (and Grunt or similar tools) is used in the frontend world, 
    where the JavaScript must be combined into a single file and minimized.  

fix gulp issue: npm i -g gulp-cli --force

gulp-nodemon: allow to automatize tasks
gulp command: gulp 'path/gulpfile.js'
eslint: source code analyzer

//eslint
npm esling file.js
npx eslint --init : configure eslint
