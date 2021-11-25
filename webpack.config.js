const path = require('path')
module.exports = {
	mode: 'development',

	entry: path.join(__dirname, 'src', 'index.js'),

	output: {
		path: path.join(__dirname, 'build'),
		filename: 'ao3-react.js',
	},

	resolve: {
		alias: {
			'react': 'preact/compat',
			'react-dom': 'preact/compat',
		},
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					plugins: [
						["@babel/plugin-transform-react-jsx", {
							"pragma": "h",
							"pragmaFrag": "Fragment",
						}]
					],
				},
			},
		]
	},
}
