import React from 'react';
import ReactDom from 'react-dom';
import { loadableReady } from '@loadable/component'
import Router from '../router/client.jsx'

const root = document.getElementById('root');
// 注意这里使用的是hydrate，而不是ReactDom.render
// ReactDom.hydrate(
//     <Router />,
//     root,
// );

loadableReady(() => {
  ReactDom.hydrate(<Router />, root)
})
