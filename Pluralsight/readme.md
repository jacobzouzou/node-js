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
 