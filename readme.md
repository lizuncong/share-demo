运行：npm run build-server以及npm run build-client执行服务端和客户端的打包程序。打包完成后
进入dist目录执行node server.js

这一节主要解决了客户端渲染部分，使得事件点击可以生效。但也存在一些问题：比如整个客户端代码都打包进
client.js文件中，如果应用非常大，client.js就显得很庞大且臃肿。因此需要解决代码分割及懒加载的问题。

主要介绍react router的集成。
react router官网有关于服务端渲染路由的介绍以及代码分割的介绍，建议感兴趣的大佬细细品品，
就差不多了。这些介绍对实现服务端渲染至关重要。

`https://reactrouter.com/web/guides/server-rendering`

`https://reactrouter.com/web/guides/code-splitting`
