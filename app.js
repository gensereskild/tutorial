//npm --version
// local dpendency - use it only in this particular project
//npm i <packageName>

//global dpendency
// npm install -g <packageName>

//package.json - manifest files (stores important info about project/package)
//create package.json in the root
//npm init step by step press enter to skip
//npm init -y (everything default)

const _ = require("lodash")

const items =[1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)