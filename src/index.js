const React = require('react';
const express = require('express')

const app = express()

const Counter = ({ count }) => {
    return (
        <div>{count}</div>
    )
}

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


app.listen(3000, function(){
    console.log('server listening at : localhost:3000')
})
