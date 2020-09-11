import React from 'react';

const  Index = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <title>react ssr哦</title>
                <meta name="description" content="这是一个非常酷的网站" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
                <div id="main" dangerouslySetInnerHTML={{ __html: children }} />
            </body>
        </html>
    );
}

export default Index
