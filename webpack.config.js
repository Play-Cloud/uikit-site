const {VueLoaderPlugin} = require('vue-loader');

const config = {

    mode: 'production',

    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'uikit': 'UIkit',
        'uikit-util': 'UIkit.util',
        'he': 'he'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'buble-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]

};

module.exports = [

    {
        ...config,
        entry: './app/main',
        output: {
            path: __dirname,
            filename: './[name].min.js'
        }
    },

    {
        ...config,
        entry: './docs/app/main',
        output: {
            path: __dirname,
            filename: './[name].min.js'
        }
    }

];
