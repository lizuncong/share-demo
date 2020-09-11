这里创建了一个简单的 `count` 组件，显然这个组件还不能直接用。因为需要配置babel等
编译react组件


这个demo有以下几点需要注意的地方：

1. 服务端需要配置webpack以支持编译React组件。
    - 注意node环境的一些差异，比如设置 `target: 'node'`，指定打包的环境。 设置`externals`
    指定不需要打包node_modules下面的依赖。

2. 注意输出renderToString及renderToStaticMarkup，并观察控制台，对比以下生成的html字符串的差异
