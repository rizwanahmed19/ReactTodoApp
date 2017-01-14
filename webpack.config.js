var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackPluginConfig = new htmlWebpackPlugin({
	template: './src/main.html',
	filename: 'index.html',
	inject: 'body'
});

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	devtool: process.env.NODE_ENV === 'production' ? undefined : 'eval-source-map',
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./src/app.js'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		htmlWebpackPluginConfig,
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	],
	output: {
		path: __dirname + '/public/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015', 'stage-2']
				} 
			}
		]
	},
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]
	}
};