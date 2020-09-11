import React from 'react'
import express from 'express'
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import Count from './count.jsx'

const app = express()

app.get('/helloword',  (req, res) => {
    res.send('hello word')
})
app.get('/', (req, res) => {
    //这里可以对比观察一下renderToString和renderToStaticMarkup两个方法的输出
    const content = renderToString(<Count count={12} />)
    console.log(content)
    console.log(renderToStaticMarkup(<Count count={10} />))
    res.send(
        `<html>
            <head>
                <meta charSet="utf-8" />
                <title>demo1</title>
                <meta name="description" content="这是一个很好的网站" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>  
            <body>
                <div id="root">${content}</div>
            </body>
        </html>`
    )
})

const server = app.listen(3000, function(){
    const host = server.address().address;
    const port = server.address().port;
    console.log('server listening at : localhost:' + port)
})
