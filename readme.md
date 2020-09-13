运行：npm run build-server以及npm run build-client执行服务端和客户端的打包程序。打包完成后
进入dist目录执行node server.js

样式的处理，看了以下，社区上目前有以下几种方案：

1. [isomorphic-style-loader](https://www.npmjs.com/package/isomorphic-style-loader)。
但这个的使用会和组件耦合，不利于移植。如下：

```jsx
/* App.js */
import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import s from './App.scss'
 
function App(props, context) {
  return (
    <div className={s.root}>
      <h1 className={s.title}>Hello, world!</h1>
    </div>
  )
}
 
export default withStyles(s)(App)
```

2. 使用 mini-css-extract-plugin 提取所有的css，然后@loadable/component会帮我们提取这些文件并按需引入。
