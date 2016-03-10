module.exports = "var webpack = require('webpack');\n\
var ExtractTextPlugin = require('extract-text-webpack-plugin');\n\
module.exports = {\n\
	entry: {\n\
		index: './client/app.jsx'\n\
	},\n\
	output: {\n\
		path: __dirname + '/public/js/',\n\
		filename: 'index.bundle.js'\n\
	},\n\
    module: {\n\
        loaders: [\n\
            {test: /\.jsx$/, loader: 'jsx-loader' },\n\
            {test: /\.(jpg|png)$/, loader: 'url-loader'},\n\
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')},\n\
        ]\n\
    },\n\
    plugins: [\n\
        new ExtractTextPlugin('../css/index.css')\n\
    ]\n\
};";