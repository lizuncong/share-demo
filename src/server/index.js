import React from 'react'
import express from 'express'
import path from 'path'
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import Home from '../pages/home/index.jsx'
import Router from '../router/server';
import Html from './html.jsx'

const webStats = path.resolve(
    __dirname,
    '../dist/web/loadable-stats-client.json',
);

const app = express()

app.use(express.static('web'));

// 注意这里需要使用'*'通配符匹配路由，不然路由不会生效
app.get('*', (req, res) => {
    const context = { test: 'hello ssr' }

    const webExtractor = new ChunkExtractor({ statsFile: webStats, entrypoints: ['main'] });

    const jsx = webExtractor.collectChunks(
        <Router location={req.url} context={context} />,
    );

    // 这里是个坑，renderToString方法一定要在webExtractor.getScriptElements，
    // webExtractor.getLinkElements，webExtractor.getStyleTags方法前面执行，不然会有
    // 问题，1.控制台会提示Did not expect server HTML to contain a <div>
    // in <div>  2. 首次渲染的时候会有闪烁
    const content = renderToString(jsx);


    const scriptTags = webExtractor.getScriptElements();
    const linkTags = webExtractor.getLinkElements();
    const styleTags = webExtractor.getStyleElements();

    const data = {}
    data.scriptTags = scriptTags;
    data.linkTags = linkTags;
    data.styleTags = styleTags;

    data.children = content;

    if (context.action === 'REPLACE') { // 需要重定向
        res.redirect(301, context.url);
        console.log('需要重定向', context)
        return;
    } else if(context.is404){ // 404
        res.status(404)
    }
    const html = renderToStaticMarkup(<Html {...data} />);
    res.send(`<!doctype html>${html}`)
})

const server = app.listen(3000, function(){
    const host = server.address().address;
    const port = server.address().port;
    console.log('server listening at : localhost:' + port)
})
