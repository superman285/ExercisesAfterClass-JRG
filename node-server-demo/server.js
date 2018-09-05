
var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}

var server = http.createServer(function(request, response){
    var parsedUrl = url.parse(request.url, true)
    var path = request.url
    var query = ''
    if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
    var pathNoQuery = parsedUrl.pathname
    var queryObject = parsedUrl.query
    var method = request.method

    /******** 从这里开始看，上面不要看 ************/



    console.log('嘿，得到 HTTP 路径为\n' + path)
    console.log('查询字符串为\n' + query)
    console.log('不含查询字符串的路径为\n' + pathNoQuery)

    console.log('===============================')

    console.log('HTTP 路径为\n' + path)
    if(path == '/'){
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.write('<!DOCTYPE html>\n<html>'  +
            '<head><link rel="stylesheet" href="/style.css">' +
            '</head><body>'  +
            '<h1>你好，我是你请求斜杠后返回的html内容</h1>' +
            '<script src="/main.js"></script>' +
            '</body></html>')
        response.end();
    }else if(path == '/main.js'){
        response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
        response.write('alert("这是请求main.js后返回的js内容")')
        response.end()
    }else if(path == '/style.css'){
        response.setHeader('Content-Type', 'text/css; charset=utf-8')
        response.write('body{background-color: teal;}h1{color: dodgerblue;}h1::after{content: " 这是请求style.css后返回的css内容"}')
        response.end()
    }else{
        response.statusCode = 404
        console.log('路径不对，404啦')
        response.end()
    }

    /******** 代码结束，下面不要看 ************/

})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用腱子后手翻转体180°接前直空翻540° 打开 http://localhost:' + port)