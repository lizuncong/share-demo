import React from 'react'
import express from 'express'
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import Home from '../pages/home/index.jsx'
import Router from '../router/server';
import Html from './html.jsx'

const app = express()

app.use(express.static('web'));

// 注意这里需要使用'*'通配符匹配路由，不然路由不会生效
app.get('*', (req, res) => {
    const context = { test: 'hello ssr' }
    const content = renderToString(<Router location={req.url} context={context} />)


    console.log('server..context...', context)

    if (context.action === 'REPLACE') { // 需要重定向
        res.redirect(301, context.url);
        console.log('需要重定向', context)
        return;
    } else if(context.is404){ // 404
        res.status(404)
    }
    const data = {
        children: content,
        scriptTags: "/client.js"
    }
    const html = renderToStaticMarkup(<Html {...data} />);
    res.send(`<!doctype html>${html}`)
})

const server = app.listen(3000, function(){
    const host = server.address().address;
    const port = server.address().port;
    console.log('server listening at : localhost:' + port)
})
