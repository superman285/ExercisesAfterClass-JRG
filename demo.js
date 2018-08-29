#!/usr/bin/env node
//不加 node 也能执行，指定执行环境就为node

console.log(process.cwd()) // 打印当前目录


var fs = require('fs')

var dirName = process.argv[2] // 你传的参数是从第 2 个开始的

fs.mkdirSync("./" + dirName) // mkdir $1
process.chdir("./" + dirName) // cd $1
fs.mkdirSync('css') // mkdir css
fs.mkdirSync('js') // mkdir js
console.log("create success!")

fs.writeFileSync("./index.html", "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>")
console.log("html written!")
fs.writeFileSync("css/style.css", "h1{color: red;}")
console.log("css written!")
fs.writeFileSync("./js/main.js", 'var string = "Hello World"\nalert(string)')
console.log("js written!")

process.exit(0)