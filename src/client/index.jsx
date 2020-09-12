import React from 'react';
import ReactDom from 'react-dom';
import Home from '../pages/home/index.jsx'

const root = document.getElementById('root');
ReactDom.hydrate(
    <Home />,
    root,
);;
