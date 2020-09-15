const path = require("path");

var express = require('express')


/**
 * 服务器端渲染的原始方式，因此就有了ejs，pug等node服务端模版引擎
 * */
var app = express()

app.use(express.static(path.resolve(__dirname, 'js')));

app.get('/', function(req, res){
    const data = { count: 1 }
    res.send(
        `<html>
            <head>
                <meta charSet="utf-8" />
                <title>demo1</title>
                <meta name="description" content="这是一个很好的网站" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>  
            <body>
                <div>
                这是一段不能响应点击的HTML
                <div>计数器：${data.count}</div>
                </div>
            </body>
        </html>`
    )
})

/* 可以响应点击事件的demo */
app.get('/js', function(req, res){
    const data = { count: 1 }
    res.send(
        `<html>
            <head>
                <meta charSet="utf-8" />
                <title>demo1</title>
                <meta name="description" content="这是一个很好的网站" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>  
            <body>
                <div>
                这是一段可以响应点击事件的HTML
                <div>
                    计数器：
                    <div id="myCount">${data.count}</div>
                </div>
                </div>
                <script src="/click.js" type="text/javascript"></script>
            </body>
        </html>`
    )
})

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('server listening at : localhost:' + port)
})
