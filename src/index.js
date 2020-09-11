var express = require('express')


/**
 * 服务器端渲染的原始方式，因此就有了ejs，pug等node服务端模版引擎
 * */
var app = express()

app.get('/helloword', function (req, res) {
    res.send('hello word')
})
app.get('/', function(req, res){
    res.send(
        `<html>
            <head>
                <meta charSet="utf-8" />
                <title>demo1</title>
                <meta name="description" content="这是一个很好的网站" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>  
            <body>
                <div>这是一段HTML</div>
            </body>
        </html>`
    )
})

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('server listening at : localhost:' + port)
})
