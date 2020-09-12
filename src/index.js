import React from 'react'
import express from 'express'
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import Count from './count.jsx'
import Html from './html.jsx'

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
       `<!doctype html>        
        <html>
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

// 使用renderToStaticMarkup渲染html模版，方便html模版的编写
app.get('/html', (req, res) => {
    const content = renderToString(<Count count={24} />)
    const data = {
        children: content
    }
    const html = renderToStaticMarkup(<Html {...data} />);
    res.send(`<!doctype html>${html}`)
})

const server = app.listen(3000, function(){
    const host = server.address().address;
    const port = server.address().port;
    console.log('server listening at : localhost:' + port)
})
