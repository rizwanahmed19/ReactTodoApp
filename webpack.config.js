var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');
var htmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackPluginConfig = new htmlWebpackPlugin({
	template: './src/main.html',
	filename: 'index.html',
	inject: 'body'
});

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
	envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch(e) {

}

module.exports = {
	devtool: process.env.NODE_ENV === 'production' ? undefined : 'eval-source-map',
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/js/foundation.min.js',
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
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				API_KEY: JSON.stringify(process.env.API_KEY),
				AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
				DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
				STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
				MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
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