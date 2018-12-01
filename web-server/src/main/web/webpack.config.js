var path = require('path');

module.exports = {
    entry: '../../../target/javascript/app.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: '../../../target/custom-build/javascript/bundle.js'
    },
    resolve: {
        modules: [ "../../src/main/web/node_modules" ]
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    }
};
