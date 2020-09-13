import React from 'react';
import ReactDom from 'react-dom';
import Router from '../router/client.jsx'

const root = document.getElementById('root');
// 注意这里使用的是hydrate，而不是ReactDom.render
ReactDom.hydrate(
    <Router />,
    root,
);
