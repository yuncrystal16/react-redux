var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm


const svgDirs = [
    require.resolve('antd-mobile').replace(/warn\.js$/, ''), // 1. 属于 antd-mobile 内置 svg 文件
    path.resolve(__dirname, './src/static/fonts')  // 2. 自己私人的 svg 存放目录
];

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        // publicPath:'/'   // npm run start 时用来解决路由链接刷新无法加载的问题，此时不能使用./, 报错 cannot get /
        // 但是当使用 npm run create 时，需要改成./, 否则bundle.js文件路径错误。
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/,exclude: /node_modules/, use: 'babel-loader'},
            {test: /\.less$/,  use: [
                'style-loader','css-loader','postcss-loader','less-loader'
            ]},
            {test: /\.css$/,  use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'postcss-loader'
            ]},
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, use:'url-loader?limit=5000' },  // 限制大小5kb
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, use:'url-loader?limit=5000'},// 限制大小小于5k
            {
                test: /\.(svg)$/i,
                use: 'svg-sprite-loader'
                // include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
            },

        ],
    },

    devServer: {
        historyApiFallback:true, //不跳转，在开发单页面应用时很有用
        // contentBase: './',
        proxy: {
            // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
            // koa 代码在 ./mock 目录中，启动命令为 npm run mock
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        }
    },
    resolve: {
        modules: [path.resolve(__dirname, "/"), "node_modules"],
        extensions: ['.web.js', '.js', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ]
};