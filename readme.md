运行：npm run build-server以及npm run build-client执行服务端和客户端的打包程序。打包完成后
进入dist目录执行node server.js

这一节主要解决了客户端渲染部分，使得事件点击可以生效。但也存在一些问题：比如整个客户端代码都打包进
client.js文件中，如果应用非常大，client.js就显得很庞大且臃肿。因此需要解决代码分割及懒加载的问题。

主要介绍react router的集成。
react router官网有关于服务端渲染路由的介绍以及代码分割的介绍，建议感兴趣的大佬细细品品，
就差不多了。这些介绍对实现服务端渲染至关重要。

`https://reactrouter.com/web/guides/server-rendering`

`https://reactrouter.com/web/guides/code-splitting`

首先安装react-router-dom

服务端渲染关于路由有以下几点需要注意：

1. 服务端使用StaticRouter，客户端使用BrowserRouter。
2. StaticRouter必须设置location及context属性。
   在路由组件中可以通过staticContext属性访问到context属性。在Home组件中，
   我通过console.log('home..', props)输出了所有的props，打开浏览器，查看控制台输出，会发现
   props包含了一个staticContext属性，值为undefined。在webstorm的终端输出中，可以看到props包含了
   一个staticContext，值就是和传给StaticRouter的context属性的值完全一样。
   
   同时，可以在路由组件中设置StaticContext。比如我在Home组件中给StaticContext设置了一个自定义的属性
   props.staticContext.testPageName = 'home'，这样就能在服务端中拿到testPageName的值

3. 路由的重定向，Redirect。
   在服务端渲染中，当访问不存在的路径时，比如 `http://localhost:3000/notfoud`，同时我们在路由中
   配置了Redirect，不存在的路径就会匹配到Redirect，然后StaticRouter就会把重定向的信息插入到context
   属性中。这样我们就可以在服务端通过context.url判断是否需要重定向。
  
4. 路由不匹配，实现404页面的两种方式：
    4.1 直接重定向到某一个页面：
        ```jsx
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/product/list" component={ProductList} />
              <Route path="/login" component={Login} />
              <Redirect to="/login" />
            </Switch>
        ```
        StaticRouter遇到Redirect时，会往context属性中注入重定向相关信息
        因此可以在服务端中利用这些信息做重定向
        
    4.2 通过定义路由的方式:
        ```jsx
             <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/product/list" component={ProductList} />
                  <Route component={NotFound} />
            </Switch>
        ```
        可看出当路由不匹配前面几个路径时，会自动匹配到NotFound页面，然后我们可以在
        NotFound页面中设置props.staticContext.is404，这样就可以在服务端中
        利用这信息做404相关的操作，比如设置res.status = 404
    


