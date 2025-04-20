const express = require('express')

const app = express()

app.get('/', function(req, res){
    const data = { count: 1 }
    res.send(
        `<html>
            <head>
                <meta charSet="utf-8" />
                <title>demo1</title>
                <meta name="description" content="这是一个很好的网站" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <style>
                    #counter {
                        cursor: pointer;
                        color: red;
                    }
                </style>
            </head>  
            <body>
                <div>
                这是一个服务端渲染返回的页面：
                <div id="counter">计数器：${data.count}</div>
                </div>
                <script>
                    let data = {count: 1}
                    document.getElementById('counter').addEventListener('click', function(){
                        data.count = data.count + 1
                        counter.innerHTML = '计数器：' + data.count
                        
                    })
                </script>
            </body>
        </html>`
    )
})


app.listen(3000, function(){
    console.log('server listening at : localhost:3000')
})
