var webpack = require('webpack');
// var path = require('path'); if using sass need to include path

module.exports = {
	entry: [
	'script!jquery/dist/jquery.min.js',
	'./src/index.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			applicationStyles: 'src/styles/app.css',
	        configureStore: 'src/store/configureStore',
	        app: 'src/components/app',
	        chart: 'src/components/chart',
	        google_map: 'src/components/google_map',
	        search_bar: 'src/containers/search_bar',
	        weather_list: 'src/containers/weather_list',
	        reducers: 'src/reducers/index',
	        reducer_weather: 'src/reducers/reducer_weather',
	        actions: 'src/actions/index'
    
	    },					
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	/* if using sass need to include loader
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]
	}*/
	devtool: 'cheap-module-eval-source-map'
};