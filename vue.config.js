module.exports = {
	devServer: {
		watchOptions: {
			aggregateTimeout: 300,
			poll: 50,
			ignored: /node_modules/
		},
		allowedHosts: [
			".bagelstudio.co",
			".bageldb.com"
		]
	}
}