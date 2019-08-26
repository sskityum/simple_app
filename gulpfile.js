const { src, dest, parallel } = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

function js(){
    return src('./src/js/main.js')
        .pipe(webpackStream({
            output:{
                filename:'bundle.js'
            },
            resolve:{
                extensions:['.js', '.json']
            },
            module:{
                rules:[
                    {
                        test:/\.(js)$/,
                        use:'babel-loader',
                        exclude:/(node_modules)/
                    }
                ]
            },
            mode:'production'
        },webpack))
        .pipe(dest('./app/static/js'))
}

function html(){
    return src('./src/public/index.html')
        .pipe(dest('./app'))
}

exports.js = js
exports.html = html

exports.default = parallel([js, html])