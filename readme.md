运行：npm run build-server以及npm run build-client执行服务端和客户端的打包程序。打包完成后
进入dist目录执行node server.js

在demo04中实现了路由的集成，也留下了几个问题，比如代码分割及懒加载，样式的处理。
    
代码分割，具体可以看看react router官网中介绍的

[Code Splitting](https://reactrouter.com/web/guides/code-splitting)

可以看出，React Router 官网给我们推荐了
 
[Loadable Components](https://loadable-components.com/docs/server-side-rendering/)
 
这个插件做代码分割。
 
首先安装相关插件：

```jsx 
npm install @loadable/component  @loadable/server && npm install @loadable/babel-plugin @loadable/webpack-plugin
```

# 第一步，修改 `webpack.base.js`

1. `babel-loader`配置新增一个 `@loadable/babel-plugin` 插件。

2. plugins新增一个LoadablePlugin插件配置

```jsx 
const LoadablePlugin = require('@loadable/webpack-plugin')
module.exports = {
  // ...
  plugins: [new LoadablePlugin()],
}
```

# 第二步，修改 src/server/index.js，设置服务端渲染 `chunk` 的提取

```jsx 
    const webStats = path.resolve(
        __dirname,
        '../dist/web/loadable-stats-client.json',
    );
    const webExtractor = new ChunkExtractor({ statsFile: webStats, entrypoints: ['client'] });
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
```

# 第三步 修改客户端代码src/client/index.jsx

```jsx
import { loadableReady } from '@loadable/component'

loadableReady(() => {
  ReactDom.hydrate(<Router />, root)
})
```

# 第四步 在src/router/routes中使用@loadable/component
