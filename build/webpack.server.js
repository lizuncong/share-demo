const path = require('path');
const nodeExternals = require('webpack-node-externals');
/**
 * 这里可以注释掉externals，然后执行打包程序，观察终端输出及dist/server.js文件，会发现
 * webpack将express，react等依赖也打包进去了，而这些依赖在node环境中是不需要打包进去的。
 * */
module.exports = {
    mode: 'development',
    // 浏览器和服务端运行环境不同，有些包在node环境中是存在的，在客户端不存在。
    // 比如同是const path = require('path')，在服务端打包时可以不用将path打包进来。
    // 但是在浏览器环境下，就必须要引入这个包并且打包进来。所以这里要指定target环境予以区分。
    target: 'node',
    // 在服务端运行的环境中，服务端所需要的包（node_modules下面的），比如express是必然不需要打包的
    // 运行时，node会自行查找，因此服务端打包不需要处理node_modules下面的包。
    // 这里可以把externals注释掉并观察打包后dist/server.js文件的内容及终端的输出情况
    externals: [
        nodeExternals(),
    ],
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, '../src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                        },
                    },
                ],
            },
        ],
    },
}
