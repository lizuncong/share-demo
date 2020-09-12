import React from 'react'
import express from 'express'
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import Home from '../pages/home/index.jsx'
import Html from './html.jsx'

const app = express()

app.use(express.static('web'));

app.get('/', (req, res) => {
    const content = renderToString(<Home />)
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
