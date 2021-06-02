module.exports = {
	devServer: {
		watchOptions: {
			aggregateTimeout: 200,
			poll: 200,
			ignored: /node_modules/
		},
		allowedHosts: [
			".bagelstudio.co",
			".bageldb.com"
		]
	}
}